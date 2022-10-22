import { vec2 } from './vec2'

/**
 * Random element from array
 *
 * @param {Array<any>} a
 * @param {number} index
 * @returns {Aany}
 */
export function randomElement(a: Array<any>): any {
	return a[Math.floor(Math.random() * a.length)]
}

/**
 * Create array with value
 *
 * @export
 * @param {number} size
 * @param {((i: number, array: Array<any>) => any | any)} value
 * @return {*}
 */
export function array(size: number, value: (i: number, array: Array<any>) => any | any) {
	const a = new Array(size)

	if (typeof value === 'function') return a.fill(undefined).map((_, i, a) => value(i, a))

	return a.fill(value)
}

/**
 * Generate matrix
 *
 * @export
 * @param {number} size
 * @param {((i: number, j: number, matrix: Array<Array<any>>) => any | any)} value
 * @return {*}
 */
export function matrix(
	rows: number,
	cols: number,
	value: (i: number, j: number, matrix: Array<Array<any>>) => any | any
) {
	const matrix = new Array(rows)

	return matrix
		.fill(undefined)
		.map((_, i, row) =>
			new Array(cols).fill(undefined).map((_, j, col) => (typeof value === 'function' ? value(i, j, matrix) : value))
		)
}

/**
 * Each matrix and return a new matrix
 *
 * @export
 * @param {Array<Array<any>>} matrix
 * @param {(rowIndex: number, colIndex: number, matrix: Array<Array<any>>) => any | any} value
 * @return {*}  {Array<Array<any>>}
 */
export function eachMatrix(
	matrix: Array<Array<any>>,
	value: (value: any, rowIndex: number, colIndex: number, matrix: Array<Array<any>>) => any | any
): Array<Array<any>> {
	return matrix.map((row, rowIndex) =>
		row.map((col, colIndex) => (typeof value === 'function' ? value(value, rowIndex, colIndex, matrix) : value))
	)
}

/**
 * Return angle (atan) from offset (or center) for matrix repetition.
 * Offset is array between [-1, -1] and [1, 1].
 * The return value is between -Math.PI / 2 and Math.PI / 2
 *
 * @param {Array<Array<any>>} matrix
 * @param {[number, number]} offsetFromCenter
 * @returns {number} between -Math.PI / 2 and Math.PI / 2
 */
export function angleFromMatrix(
	matrix: Array<Array<any>>,
	rowIndex: number,
	colIndex: number,
	offsetFromCenter: [number, number] = [0, 0]
): number {
	const centerMatrix = [(matrix[0].length - 1) / 2, (matrix.length - 1) / 2]

	centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0]
	centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1]

	const x = colIndex - centerMatrix[0]
	const y = rowIndex - centerMatrix[1]

	return x === 0 ? 0 : Math.atan(y / x)
}

/**
 * Return angle (atan2, 4 quadrants) from offset (or center) for matrix repetition.
 * Offset is array between [-1, -1] and [1, 1].
 * The return value is between -Math.PI an Math.PI
 *
 * @param {Array<Array<any>>} matrix
 * @param {[number, number]} offsetFromCenter
 * @returns {number} between -Math.PI an Math.PI
 */
export function angle2FromMatrix(
	matrix: Array<Array<any>>,
	rowIndex: number,
	colIndex: number,
	offsetFromCenter: [number, number] = [0, 0]
): number {
	const centerMatrix = [(matrix[0].length - 1) / 2, (matrix.length - 1) / 2]

	centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0]
	centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1]

	const x = colIndex - centerMatrix[0]
	const y = rowIndex - centerMatrix[1]

	return x === 0 ? 0 : Math.atan2(y, x)
}

/**
 * Return distance from offset (or center) for matrix repetition.
 * The return value is between 0 and 1
 *
 * @param {Array<Array<any>>} matrix
 * @param {[number, number]} offsetFromCenter offset relative to distance prop
 * @returns {number} between 0 and 1
 */
export function distanceFromMatrix(
	matrix: Array<Array<any>>,
	rowIndex: number,
	colIndex: number,
	offsetFromCenter: [number, number] = [0, 0]
): number {
	const centerMatrix = [0.5, 0.5]

	centerMatrix[0] += centerMatrix[0] * offsetFromCenter[0]
	centerMatrix[1] += centerMatrix[1] * offsetFromCenter[1]

	const current = [colIndex / (matrix[0].length - 1), rowIndex / (matrix.length - 1)]

	return vec2.distance(current, centerMatrix)
}
