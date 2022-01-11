export type line = [number, number, number, number]

export function lineIntersects(lineA: line, lineB: line): boolean {
	const [a, b, c, d] = lineA
	const [p, q, r, s] = lineB

	const det = (c - a) * (s - q) - (r - p) * (d - b)

	if (det === 0) {
		return false
	}

	const lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det
	const gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det
	// return 0.00000001 < lambda && lambda < 1.00000001 && 0.00000001 < gamma && gamma < 1.00000001
	return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1
}

export function polylineIntersects(polylineA: number[], polylineB: number[]): boolean {
	for (let i = 0, len = polylineA.length - 2; i < len; i += 2) {
		for (let j = 0, len = polylineB.length - 2; j < len; j += 2) {
			if (
				lineIntersects(
					[polylineA[i], polylineA[i + 1], polylineA[i + 2], polylineA[i + 3]],
					[polylineB[j], polylineB[j + 1], polylineB[j + 2], polylineB[j + 3]]
				)
			) {
				return true
			}
		}
	}
	return false
}

export type point = [number, number]

/**
 * Check point is inside a polygon
 *
 * @links https://www.algorithms-and-technologies.com/point_in_polygon/javascript
 * @export
 * @param {point} point
 * @param {number[]} polygon
 * @return {*}
 */
export function pointInPolygon(polygon: number[], [x, y]: point): boolean {
	//A point is in a polygon if a line from the point to infinity crosses the polygon an odd number of times
	let odd = false

	//For each edge (In this case for each point of the polygon and the previous one)
	for (let i = 0, j = polygon.length - 2; i < polygon.length; i += 2) {
		//If a line from the point into infinity crosses this edge
		if (
			polygon[i + 1] > y !== polygon[j + 1] > y && // One point needs to be above, one below our y coordinate
			// ...and the edge doesn't cross our Y corrdinate before our x coordinate (but between our x coordinate and infinity)
			x < ((polygon[j] - polygon[i]) * (y - polygon[i + 1])) / (polygon[j + 1] - polygon[i + 1]) + polygon[i]
		) {
			// Invert odd
			odd = !odd
		}
		j = i
	}
	//If the number of crossings was odd, the point is in the polygon
	return odd
}
