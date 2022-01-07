import { fit } from './fit'

export function loadImage(src: string): Promise<HTMLImageElement> {
	return new Promise(resolve => {
		const image = new Image()
		image.addEventListener('load', () => resolve(image))
		image.src = src
	})
}

export function fitImage(image: HTMLImageElement, width: number, height: number, mode: fit = 'contain') {
	return fit(image.naturalWidth, image.naturalHeight, width, height, mode)
}
