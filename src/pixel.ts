import { clamp } from './number'

export type pixel = [number, number, number, number]

export function eachPixel(
	canvas: HTMLCanvasElement,
	callback: (pixel: pixel, x: number, y: number, count: number) => void | pixel
): ImageData {
	const context = canvas.getContext('2d')
	const imageData = context!.getImageData(0, 0, canvas.width, canvas.height)
	const data = imageData.data
	const result = new Uint8ClampedArray(data.length)
	const length = data.length
	const width = canvas.width
	const height = canvas.height

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			const index = y * width * 4 + x * 4
			const pixel: [number, number, number, number] = [data[index], data[index + 1], data[index + 2], data[index + 3]]
			let newPixel = callback(pixel, x, y, length)
			result.set(typeof newPixel === 'undefined' ? pixel : newPixel, index)
		}
	}

	return new ImageData(result, width, height)
}

export type ImageDataSource = HTMLCanvasElement | ImageData

export function pixelAt(canvasOrImageData: ImageDataSource, x: number, y: number, at: [number, number]): pixel {
	const imageData =
		canvasOrImageData instanceof ImageData
			? canvasOrImageData
			: canvasOrImageData.getContext('2d')!.getImageData(0, 0, canvasOrImageData.width, canvasOrImageData.height)
	const data = imageData.data

	x = clamp(0, imageData.width - 1, x + at[0])
	y = clamp(0, imageData.height - 1, y + at[1])

	const index = y * (imageData.width * 4) + x * 4
	return [data[index], data[index + 1], data[index + 2], data[index + 3]]
}

export function pixelAtTop(canvasOrImageData: ImageDataSource, x: number, y: number, distance = 1): pixel {
	return pixelAt(canvasOrImageData, x, y, [0, -distance])
}
export function pixelAtBottom(canvasOrImageData: ImageDataSource, x: number, y: number, distance = 1): pixel {
	return pixelAt(canvasOrImageData, x, y, [0, distance])
}
export function pixelAtLeft(canvasOrImageData: ImageDataSource, x: number, y: number, distance = 1): pixel {
	return pixelAt(canvasOrImageData, x, y, [-distance, 0])
}
export function pixelAtRight(canvasOrImageData: ImageDataSource, x: number, y: number, distance = 1): pixel {
	return pixelAt(canvasOrImageData, x, y, [distance, 0])
}
export function pixelAtTopLeft(canvasOrImageData: ImageDataSource, x: number, y: number, distance = 1): pixel {
	return pixelAt(canvasOrImageData, x, y, [-distance, -distance])
}
export function pixelAtTopRight(canvasOrImageData: ImageDataSource, x: number, y: number, distance = 1): pixel {
	return pixelAt(canvasOrImageData, x, y, [distance, -distance])
}
export function pixelAtBottomLeft(canvasOrImageData: ImageDataSource, x: number, y: number, distance = 1): pixel {
	return pixelAt(canvasOrImageData, x, y, [-distance, distance])
}
export function pixelAtBottomRight(canvasOrImageData: ImageDataSource, x: number, y: number, distance = 1): pixel {
	return pixelAt(canvasOrImageData, x, y, [distance, distance])
}
