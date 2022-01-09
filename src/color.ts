import { pixel } from './pixel'

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
	? Acc[number]
	: Enumerate<N, [...Acc, Acc['length']]>

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

/**
 * number between 0 and 255
 */
export type rgb = [number, number, number]
export type rgba = [number, number, number, number]

/**
 * number between 0 and 360, 0 and 100, 0 and 100
 */
export type hsl = [number, number, number]

/**
 * Convert RGB to HSL
 *
 * @export
 * @param {rgb} [r, g, b]
 * @return {*}  {hsl}
 */
export function rgbToHsl([r, g, b]: rgb): hsl {
	;(r = r / 255), (g = g / 255), (b = b / 255)
	const max = Math.max(r, g, b),
		min = Math.min(r, g, b)
	let h = 0,
		s = 0,
		l = (max + min) / 2

	if (max !== min) {
		const d = max - min
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0)
				break
			case g:
				h = (b - r) / d + 2
				break
			case b:
				h = (r - g) / d + 4
				break
		}
		h /= 6
	}

	return [h * 360, s * 100, l * 100]
}

/**
 *  * Convert HSL to RGB
 *
 * @export
 * @param {hsl} [h, s, l]
 * @return {*}  {rgb}
 */
export function hslToRgb([h, s, l]: hsl): rgb {
	h /= 360
	s /= 100
	l /= 100

	let r = l,
		g = l,
		b = l

	if (s !== 0) {
		const hue2rgb = (p: number, q: number, t: number) => {
			t += t < 0 ? 1 : t > 1 ? -1 : 0
			if (t < 1 / 6) return p + (q - p) * 6 * t
			if (t < 1 / 2) return q
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
			return p
		}

		const q = l < 0.5 ? l * (1 + s) : l + s - l * s
		const p = 2 * l - q
		r = hue2rgb(p, q, h + 1 / 3)
		g = hue2rgb(p, q, h)
		b = hue2rgb(p, q, h - 1 / 3)
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

export function rgbToHex([r, g, b]: rgb): string {
	const rgb = (r << 16) | (g << 8) | (b << 0)
	return '#' + (0x1000000 + rgb).toString(16).slice(1)
}

/**
 * Brightness [0-255]
 *
 * @export
 * @param {rgb} [r, g, b]
 * @return {*}  {number from 0 to 255}
 */
export function brightness([r, g, b, a]: rgb | rgba): number {
	return a && a > 0 ? (r * 299 + g * 587 + b * 114) / 1000 : 0
}

/**
 * Luminance [0-1]
 *
 * @export
 * @param {rgb} [r, g, b]
 * @return {*}  {number from 0 to 1}
 */
export function luminance([r, g, b]: rgb): number {
	return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

export function isDark([r, g, b]: rgb): boolean {
	return brightness([r, g, b]) < 128
}

export function isLight([r, g, b]: rgb): boolean {
	return brightness([r, g, b]) >= 128
}
