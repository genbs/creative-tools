/**
 * Temporany matrix
 *
 * @internal
 * @ignore
 */
const MATRIX: Array<number> = new Array(4)

/**
 * vec2 operation
 *
 */
const vec2 = {
	/**
	 * from new vertex
	 *
	 * @param {Array<number> | number} [x=0]
	 * @param {number} [y]
	 * @returns {Array<number>}
	 */
	from: (x: Array<number> | number = 0, y?: number): Array<number> => {
		const out = new Array(2)
		if (typeof x === 'number') {
			out[0] = x
			out[1] = y ?? x
		} else {
			out[0] = x[0]
			out[1] = x[1]
		}
		return out
	},

	fromAngle: (angle: number, length = 1): Array<number> => {
		return [Math.cos(angle) * length, Math.sin(angle) * length]
	},

	normalize: (v: Array<number>): Array<number> => {
		const len = vec2.length(v)
		return len !== 0 ? [v[0] / len, v[1] / len] : [0, 0]
	},

	/**
	 * Distance between two points
	 *
	 * @param {Array<number>} a
	 * @param {Array<number>} b
	 * @returns {number}
	 */
	distance: (a: Array<number>, b: Array<number>): number => Math.hypot(a[0] - b[0], a[1] - b[1]),

	/**
	 * dot product
	 *
	 * @param {Array<number>} a
	 * @param {Array<number>} b
	 * @returns {number}
	 */
	dot: (a: Array<number>, b: Array<number>): number => a[0] * b[0] + a[1] * b[1],

	/**
	 * length of point
	 *
	 * @param {Array<number>} vec
	 * @returns {number}
	 */
	length: (vec: Array<number>): number => Math.hypot(vec[0], vec[1]),

	/**
	 * angle between two point
	 *
	 * @param {Array<number>} a
	 * @param {Array<number>} b
	 * @returns {number}
	 */
	angle: (a: Array<number>, b: Array<number>): number => {
		a = vec2.normalize(a)
		b = vec2.normalize(b)
		return Math.acos(vec2.dot(a, b))
	},

	/**
	 * skewX point
	 *
	 * @param {Array<number>} vec
	 * @param {number} m
	 */
	skewX: (vec: Array<number>, m: number): void => {
		vec[0] += Math.tan(m) * vec[1]
	},

	/**
	 * skewY point
	 *
	 * @param {Array<number>} vec
	 * @param {number} m
	 */
	skewY: (vec: Array<number>, m: number): void => {
		vec[1] += Math.tan(m) * vec[0]
	},

	/**
	 * squeezeX point
	 *
	 * @param {Array<number>} vec
	 * @param {number} m
	 */
	squeezeX: (vec: Array<number>, m: number): void => {
		vec[1] += vec[1] * (vec[0] * -m)
	},

	/**
	 * squeezeY point
	 *
	 * @param {Array<number>} vec
	 * @param {number} m
	 */
	squeezeY: (vec: Array<number>, m: number): void => {
		vec[0] += vec[0] * (vec[1] * m)
	},

	/**
	 * Rotate point
	 *
	 * @param {Array<number>} vec
	 * @param {Array<number>} MATRIX
	 * @param {Array<number>} fromPoint
	 * @internal
	 */
	rotate: (vec: Array<number>, MATRIX: Array<number>, fromPoint: Array<number>): void => {
		const p0 = vec[0] - fromPoint[0]
		const p1 = vec[1] - fromPoint[1]

		vec[0] = p0 * MATRIX[0] + p1 * MATRIX[1] + fromPoint[0]
		vec[1] = p0 * MATRIX[2] + p1 * MATRIX[3] + fromPoint[1]
	},

	/**
	 * RotateX point
	 *
	 * @param {Array<number>} vec
	 * @param {Array<number>} fromPoint
	 * @param {number} rad
	 */
	rotateX: (vec: Array<number>, fromPoint: Array<number>, rad: number): void => {
		MATRIX[0] = 1
		MATRIX[1] = 0
		MATRIX[2] = 0
		MATRIX[3] = Math.cos(rad)

		vec2.rotate(vec, MATRIX, fromPoint)
	},

	/**
	 * RotateY point
	 *
	 * @param {Array<number>} vec
	 * @param {Array<number>} fromPoint
	 * @param {number} rad
	 */
	rotateY: (vec: Array<number>, fromPoint: Array<number>, rad: number): void => {
		MATRIX[0] = Math.cos(rad)
		MATRIX[1] = 0
		MATRIX[2] = 0
		MATRIX[3] = 1

		vec2.rotate(vec, MATRIX, fromPoint)
	},

	/**
	 * RotateZ point
	 *
	 * @param {Array<number>} vec
	 * @param {Array<number>} fromPoint
	 * @param {number} rad
	 */
	rotateZ: (vec: Array<number>, fromPoint: Array<number>, rad: number): void => {
		MATRIX[0] = Math.cos(rad)
		MATRIX[1] = -Math.sin(rad)
		MATRIX[2] = Math.sin(rad)
		MATRIX[3] = Math.cos(rad)

		vec2.rotate(vec, MATRIX, fromPoint)
	},

	/**
	 * Translate vertex
	 *
	 * @param {Array<number>} vec
	 * @param {Array<number>} to
	 */
	translate: (vec: Array<number>, to: Array<number>): void => {
		vec[0] += to[0]
		vec[1] += to[1]
	},

	/**
	 * Scale vertex
	 *
	 * @param {Array<number>} vec
	 * @param {Array<number>} to
	 */
	scale: (vec: Array<number>, to: Array<number>): void => {
		vec[0] *= to[0]
		vec[1] *= to[1]
	},

	/**
	 * Scale vertex
	 *
	 * @param {Array<number>} vec
	 * @param {Array<number>} to
	 */
	divide: (vec: Array<number>, to: Array<number>): void => {
		vec[0] /= to[0]
		vec[1] /= to[1]
	},

	/**
	 * Vec to string
	 *
	 * @param {Array<number>} vec
	 * @return {string}
	 */
	toString: (vec: Array<number>): string => `x: ${vec[0]}, y: ${vec[1]}`,

	/**
	 * Vertex [0, 0]
	 */
	ZERO: Array.from([0, 0]) as [number, number],

	/**
	 * Vertex [1, 1]
	 */
	ONE: Array.from([1, 1]) as [number, number],
}

export { vec2 }
