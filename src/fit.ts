export type fit = 'cover' | 'contain' | 'none'

export function fit(
	sourceWidth: number,
	sourceHeight: number,
	destWidth: number,
	destHeight: number,
	fit: fit
): { x: number; y: number; width: number; height: number; scale: number } {
	let x = 0,
		y = 0,
		scale = 1,
		finalWidth = sourceWidth,
		finalHeight = sourceHeight

	const ratio = destWidth / destHeight
	const sourceRatio = sourceWidth / sourceHeight

	if (fit === 'contain') {
		finalWidth = ratio > sourceRatio ? (sourceWidth * destHeight) / sourceHeight : destWidth
		finalHeight = ratio > sourceRatio ? destHeight : (sourceHeight * destWidth) / sourceWidth
		scale = Math.max(finalWidth, finalHeight) / Math.max(sourceWidth, sourceHeight)
	} else if (fit === 'cover') {
		finalWidth = ratio < sourceRatio ? (sourceWidth * destHeight) / sourceHeight : destWidth
		finalHeight = ratio < sourceRatio ? destHeight : (sourceHeight * destWidth) / sourceWidth
		// scale = Math.min(sourceWidth, sourceHeight) / Math.min(finalWidth, finalHeight)
		scale = Math.max(finalWidth, finalHeight) / Math.max(sourceWidth, sourceHeight)
	} else {
		// finalWidth = sourceWidth
		// finalHeight = sourceHeight
	}

	x = (destWidth - finalWidth) / 2
	y = (destHeight - finalHeight) / 2

	return {
		x,
		y,
		width: finalWidth,
		height: finalHeight,
		scale,
	}
}
