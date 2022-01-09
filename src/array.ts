import { randomInt } from './number'

/**
 * Ritorna un elemento random di un array.
 *
 * @example
 * ```javascript
 *
 * const a = [1, 2, 3]
 * console.log(utility.array.next(a, 2)) // 2
 * ```
 *
 * @param {Array<any>} a
 * @param {number} index
 * @returns {Aany}
 */
export const randomElement = (a: Array<any>): any => a[randomInt(0, a.length - 1)]
