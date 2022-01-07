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
export * from './random'
export * from './buffer'
export * from './number'
export * from './noise'
export * from './canvas'
export * from './pixel'
export * from './image'
export * from './fit'
export * from './color'
