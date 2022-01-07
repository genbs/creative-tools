/**
 * Convert number from radians to degrees
 *
 *
 * @example
 * ```javascript
 * toDegrees(Math.PI) // 180
 * ```
 *
 * @param {number} radians
 * @returns {number}
 */
export function toDegrees(radians: number): number {
	return (radians * 180) / Math.PI
}

/**
 * Convert angle from degrees to radians
 * @example
 * ```javascript
 * toRadians(180) // 3.141592653589793
 * ```
 *
 * @param {number} degrees
 * @returns {number}
 */
export function toRadians(degrees: number): number {
	return (degrees * Math.PI) / 180
}

/**
 * Linear interpolation from `a` when `i` as 0 an `b` when `i' as 1
 *
 * @param {number} a
 * @param {number} b
 * @param {number} i
 * @returns {number}
 */
export function lerp(a: number, b: number, i: number): number {
	return (1 - i) * a + i * b
}

/**
 * Return number between 0 and 1
 *
 * @export
 * @param {number} value
 * @return {*}  {number}
 */
export function clamp01(value: number): number {
	return clamp(0, 1, value)
}

/**
 * Return number between min and max
 *
 * @example
 * ```javascript
 * clamp(0, 1, 1.2) // 1
 * clamp(0, 1, -2) // 0
 * ```
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
export function clamp(min: number, max: number, value: number): number {
	return value <= min ? min : value >= max ? max : value
}

/**
 * Map number between refMin e refMax from min and max
 *
 *
 * @example
 * ```javascript
 * relativeClamp(0, 1, 0.5, 100, 200) // 150
 * ```
 *
 * @param {number} refMin
 * @param {number} refMax
 * @param {number} value
 * @param {number} toMin
 * @param {number} toMax
 * @returns {number}
 */
export function relativeClamp(refMin: number, refMax: number, value: number, toMin: number, toMax: number): number {
	return clamp(toMin, toMax, ((value - refMin) / (refMax - refMin)) * (toMax - toMin) + toMin)
}
