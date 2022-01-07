/**
 * @internal
 * @ignore
 */
const randoms: {
	[key: string]: () => number
} = {}

/**
 * Random number generator
 * @example
 * ```javascript
 * 	Urpflanze.random('seed') // 0.9367527104914188
 * ```
 *
 * @category Utilities
 * @param {string} seed
 * @param {number} min
 * @param {number} max
 * @param {number} decimals
 * @returns {number}
 */
export function random(seed?: string | number | null, min = 0, max = 1, decimals?: number): number {
	const key: string = seed + ''

	if (typeof randoms[key] === 'undefined') {
		const seed = xmur3(key)
		randoms[key] = sfc32(seed(), seed(), seed(), seed())
	}

	const value = min + randoms[key]() * (max - min)

	return typeof decimals !== 'undefined' ? Math.round(value * 10 ** decimals) / 10 ** decimals : value
}

/**
 *
 * @internal
 * @param str
 * @returns
 */
function xmur3(str: string) {
	let i = 0,
		h = 1779033703 ^ str.length
	for (; i < str.length; i++) (h = Math.imul(h ^ str.charCodeAt(i), 3432918353)), (h = (h << 13) | (h >>> 19))

	return function () {
		h = Math.imul(h ^ (h >>> 16), 2246822507)
		h = Math.imul(h ^ (h >>> 13), 3266489909)
		return (h ^= h >>> 16) >>> 0
	}
}

/**
 * @internal
 * @param a
 * @param b
 * @param c
 * @param d
 * @returns
 */
function sfc32(a: number, b: number, c: number, d: number) {
	return function () {
		a >>>= 0
		b >>>= 0
		c >>>= 0
		d >>>= 0
		let t = (a + b) | 0
		a = b ^ (b >>> 9)
		b = (c + (c << 3)) | 0
		c = (c << 21) | (c >>> 11)
		d = (d + 1) | 0
		t = (t + d) | 0
		c = (c + t) | 0
		return (t >>> 0) / 4294967296
	}
}
