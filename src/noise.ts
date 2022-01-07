import SimplexNoise from 'simplex-noise'

/**
 * @internal
 * @ignore
 */
const noises: {
	[key: string]: SimplexNoise
} = {
	random: new SimplexNoise(Math.random),
}

/**
 * <a href="https://github.com/jwagner/simplex-noise.js" target="_blank">SimplexNoise</a>
 * Use 'random' as seed property for random seed.
 * Return value between -1 and 1
 *
 * @category Utilities
 *
 * @param {string} [seed='random']
 * @param {number} [x=0]
 * @param {number} [y=0]
 * @param {number} [z=0]
 * @param {number} [min=-1]
 * @param {number} [max=-1]
 * @returns {number} between -1 and 1
 */
export function noise(seed = 'random', x = 0, y = 0, z = 0, min = -1, max = 1): number {
	if (typeof noises[seed] === 'undefined') {
		noises[seed] = new SimplexNoise(seed)
	}
	const value = noises[seed].noise3D(x, y, z)

	return min !== -1 || max !== 1 ? (0.5 + value * 0.5) * (max - min) + min : value
}
