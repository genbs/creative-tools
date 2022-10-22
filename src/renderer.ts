import { createFFmpeg, FFmpeg } from '@ffmpeg/ffmpeg'
import { Canvas, JpegConfig, PngConfig } from 'canvas'
import JSZip from 'jszip'
import { now } from './date'
import { bBrowser, bNode } from './env'
import { clamp } from './number'

export interface ZIPEvents {
	/**
	 * Called when start ZIP rendering
	 */
	start?: (props: { chunks: number; totalFrames: number; framesForChunk: number }) => void

	/**
	 * Called each frame render
	 */
	progress?: (props: {
		chunk: number
		frame: number
		totalFrames: number
		framesForChunk: number
		totalChunks: number
		renderTime: number
		remainingTime: number
		elapsedTime: number
	}) => void
	prepare: CallableFunction
}

export interface VideoEvents {
	/**
	 * Called when start video rendering before loading FFmpeg.wasm
	 */
	init?: (props: { totalFrames: number; duration: number; framerate: number; type: TRendererVideoType }) => void

	/**
	 * Called when FFmpeg.wasm is loaded
	 */
	start?: (props: { totalFrames: number; duration: number; framerate: number; type: TRendererVideoType }) => void

	/**
	 * Called each frame render
	 */
	progress?: (props: {
		frame: number
		duration: number
		totalFrames: number
		renderTime: number
		remainingTime: number
		elapsedTime: number
	}) => void

	/**
	 * Called when each frame is rendered and video generation start
	 */
	preparing?: CallableFunction
}

export type TRendererVideoType = 'video/webm' | 'video/mp4' | 'gif'

/**
 * Blob or Buffer
 *
 * @category Renderer
 */
export type BoB = Blob | Buffer

/**
 * Options or Quality
 *
 * @category Renderer
 */
// export type OoQ = PngConfig | JpegConfig | number

/**
 * The Renderer is a class for exporting the scene
 *
 * @category Renderer
 * @class Renderer
 * @extends {Emitter<IRendererEvents>}
 */
class Renderer {
	private ffmpeg: FFmpeg | undefined
	private ffmpegCorePath: string | undefined
	private frames: Promise<BoB>[] = []

	constructor(ffmpegCorePath?: string) {
		this.ffmpegCorePath =
			typeof ffmpegCorePath === 'undefined'
				? 'https://unpkg.com/@ffmpeg/core@0.10.0/dist/ffmpeg-core.js'
				: ffmpegCorePath
	}

	/**
	 * Remove all stored frames
	 *
	 */
	public flush() {
		this.frames = []
	}

	/**
	 * Render any frame and create array of zip
	 *
	 * @param imagesType
	 * @param quality
	 * @param framesForChunk
	 * @returns
	 */
	public async zip(
		imagesType: 'image/jpeg' | 'image/png' = 'image/png',
		framesForChunk = 600,
		events?: ZIPEvents
	): Promise<Array<Uint8Array>> {
		const startTime = now()
		const zip = new JSZip()
		const totalFrames = this.frames.length
		const chunks = Math.ceil(totalFrames / framesForChunk)

		events && events.start && events.start({ chunks, totalFrames, framesForChunk })

		const extension = imagesType === 'image/jpeg' ? '.jpg' : '.png'

		const zipParts: Array<Uint8Array> = []

		let totalRenderTime = 0

		for (let chunk = 0, rendered = 1; chunk < chunks; chunk++) {
			for (let frameIndex = 0; frameIndex < framesForChunk; frameIndex++, rendered++) {
				const frame = frameIndex + chunk * framesForChunk

				if (frame < totalFrames) {
					const renderStartTime = now()
					const frameName = frame.toString().padStart(5, '0') + extension

					const blob = await this.frames[frame]
					const buffer = (await (bNode ? blob : (blob as Blob).arrayBuffer())) as Buffer | ArrayBuffer

					zip.file(frameName, new Uint8Array(buffer, 0, buffer.byteLength))

					const currentTime = now()
					const renderTime = currentTime - renderStartTime
					totalRenderTime += renderTime

					events &&
						events.progress &&
						events.progress({
							chunk: chunk + 1,
							frame: frame + 1,
							totalFrames,
							framesForChunk,
							totalChunks: chunks,
							renderTime,
							remainingTime: (totalFrames - rendered) * (totalRenderTime / rendered),
							elapsedTime: currentTime - startTime,
						})
				}
			}

			events && events.prepare && events.prepare()

			zipParts.push(await zip.generateAsync({ type: 'uint8array' }))
		}

		return zipParts
	}

	/**
	 * Render animation
	 *
	 * @param type render type
	 * @param quality
	 * @param ffmpegLogger
	 * @param ffmpegProgress
	 * @returns
	 */
	public async video(
		type: TRendererVideoType = 'video/mp4',
		framerate = 50,
		events: VideoEvents & {
			ffmpegLogger?: (logParams: { type: string; message: string }) => any
			ffmpegProgress?: (progressParams: { ratio: number }) => any
		}
	): Promise<Uint8Array> {
		const startTime = now()

		const totalFrames = this.frames.length
		const duration = totalFrames / framerate

		events && events.init && events.init({ totalFrames, framerate, duration, type })

		if (!this.ffmpeg) {
			const ffmpegOptions: any = {
				log: false,
			}

			if (this.ffmpegCorePath) ffmpegOptions.corePath = this.ffmpegCorePath
			events && events.ffmpegLogger && (ffmpegOptions.logger = events.ffmpegLogger)
			events && events.ffmpegProgress && (ffmpegOptions.progress = events.ffmpegProgress)

			this.ffmpeg = createFFmpeg(ffmpegOptions)

			await this.ffmpeg.load()
		}

		let totalRenderTime = 0

		events && events.start && events.start({ totalFrames, framerate, duration, type })

		for (let frame = 0; frame < totalFrames; frame++) {
			const renderStartTime = now()

			const blob = await this.frames[frame]
			const buffer = (await (bNode ? blob : (blob as Blob).arrayBuffer())) as Buffer | ArrayBuffer
			const frameName = frame.toString().padStart(5, '0') + '.jpg'
			this.ffmpeg.FS('writeFile', frameName, new Uint8Array(buffer, 0, buffer.byteLength))

			const currentTime = now()
			const renderTime = currentTime - renderStartTime
			totalRenderTime += renderTime

			// TODO: progress in ffmpeglogger
			events &&
				events.progress &&
				events.progress({
					totalFrames,
					frame: frame + 1,
					renderTime,
					duration,
					remainingTime: (totalFrames - frame) * (totalRenderTime / (frame + 1)),
					elapsedTime: currentTime - startTime,
				})
		}

		const args = ['-r', framerate.toString(), '-i', '%05d.jpg']
		let outExt = 'mp4'

		switch (type) {
			case 'video/webm':
				args.push('-c:v', 'libvpx')
				args.push('-row-mt', '1')
				args.push('-pix_fmt', 'yuv420p')
				outExt = 'webm'
				break
			case 'video/mp4':
				args.push('-c:v', 'libx264')
				args.push('-pix_fmt', 'yuv420p')
				outExt = 'mp4'
				break
			case 'gif':
				args.push('-loop', '0')
				outExt = 'gif'
				break
		}
		const outName = 'out.' + outExt

		args.push(outName)

		events && events.preparing && events.preparing()

		await this.ffmpeg.run(...args)
		const result = await this.ffmpeg.FS('readFile', outName)

		return result
	}

	/**
	 * Render frame `frameNumber` to Blob or Buffer
	 *
	 * @param mime image type
	 * @param options quality or options
	 */
	public store(canvas: HTMLCanvasElement, mime: 'image/png' | 'image/jpeg', quality = 1): void {
		this.frames.push(this.blobOrBuffer(canvas, mime, quality))
	}

	/**
	 * Canvas to DataURL
	 *
	 * @param mime
	 * @param optionsOrQuality
	 * @returns
	 */
	public toDataUrl(canvas: HTMLCanvasElement, mime: 'image/png' | 'image/jpeg', optionsOrQuality = 1): null | string {
		// if (bBrowser && canvas instanceof OffscreenCanvas) {
		// 	console.warn('Cannot convert toDataURL in OffscreenCanvas')
		// } else {
		return (canvas as Canvas | HTMLCanvasElement).toDataURL(mime, optionsOrQuality)
		// }
		// return null
	}

	private blobOrBuffer(
		canvas: HTMLCanvasElement | Canvas,
		mime: 'image/png' | 'image/jpeg',
		optionsOrQuality = 1
	): Promise<BoB> {
		if (canvas === null) throw new Error('Canvas not setted into Drawer')

		if (bNode) {
			// TODO default node quality for jpeg and png
			switch (mime) {
				case 'image/png': {
					const pngConf: PngConfig =
						typeof optionsOrQuality === 'number'
							? {
									compressionLevel: (9 - clamp(0, 1, optionsOrQuality) * 9) as 0 | 1 | 5 | 2 | 3 | 4 | 6 | 7 | 8 | 9,
							  }
							: (optionsOrQuality as PngConfig)
					return Promise.resolve((canvas as Canvas).toBuffer(mime, pngConf))
				}
				case 'image/jpeg': {
					const jpegConf: JpegConfig =
						typeof optionsOrQuality === 'number'
							? {
									quality: optionsOrQuality,
							  }
							: (optionsOrQuality as JpegConfig)
					return Promise.resolve((canvas as Canvas).toBuffer(mime, jpegConf))
				}
			}
		}

		// if (canvas instanceof OffscreenCanvas) {
		// 	return canvas.convertToBlob({ type: mime, quality: typeof optionsOrQuality === 'number' ? optionsOrQuality : 1 })
		// }

		return new Promise<Blob>(resolve => {
			;(canvas as unknown as HTMLCanvasElement).toBlob(
				blob => {
					if (blob) resolve(blob)
					else throw new Error('Blob error')
				},
				mime,
				typeof optionsOrQuality === 'number' ? optionsOrQuality : 1
			)
		})
	}
}

export { Renderer }
