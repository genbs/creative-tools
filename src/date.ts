const measurement = typeof performance !== 'undefined' ? performance : Date

/**
 * Get current timestamp in milliseconds
 *
 * @category Utilities
 * @returns {number}
 */
export function now(): number {
	return measurement.now()
}
