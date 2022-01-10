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
export function matrix(size: number, value: (i: number, j: number, matrix: Array<Array<any>>) => any | any) {
	const matrix = new Array(size)

	return matrix.fill(undefined).map((_, i, row) => row.fill(undefined).map((_, j, col) => value(i, j, matrix)))
}

/**
 * Each matrix and return a new matrix
 *
 * @export
 * @param {Array<Array<any>>} matrix
 * @param {(i: number, j: number, matrix: Array<Array<any>>) => any} callback
 * @return {*}  {Array<Array<any>>}
 */
export function eachMatrix(
	matrix: Array<Array<any>>,
	callback: (i: number, j: number, matrix: Array<Array<any>>) => any
): Array<Array<any>> {
	return matrix.map((row, i) => row.map((col, j) => callback(i, j, matrix)))
}
