/**
 * Evenly distributes a number of points in a buffer
 *
 * @param {Float32Array} buffer current buffer
 * @param {number} pointsToAdd points to add
 * @return {*}  {Float32Array}
 */
export function distributePointsInBuffer(buffer: Float32Array, pointsToAdd: number): Float32Array {
	const bufferLen = buffer.length
	const pointsLen = bufferLen / 2
	const finalBufferLength = (pointsLen + pointsToAdd) * 2
	const edges = pointsLen - 1

	if (edges > 1) {
		const lastPoint = bufferLen - 2
		const newPointsOnEdge = Math.floor(pointsToAdd / edges)
		const bufferWithPointsEveryEdge = bufferLen + newPointsOnEdge * lastPoint
		let remainingPoints = (finalBufferLength - bufferWithPointsEveryEdge) / 2
		const edgeRemainingIndex = Math.round(edges / remainingPoints)
		const result = new Float32Array(finalBufferLength)

		for (let i = 0, edgeIndex = 0, r = 0; i < lastPoint; i += 2, edgeIndex++, r += 2) {
			const ax = buffer[i]
			const ay = buffer[i + 1]
			const bx = buffer[i + 2]
			const by = buffer[i + 3]
			result[r] = ax
			result[r + 1] = ay

			const addReminingPoints = remainingPoints > 0 && (edgeIndex % edgeRemainingIndex === 0 || i === lastPoint - 2)
			const currentPointsOnEdge = newPointsOnEdge + (addReminingPoints ? 1 : 0)
			const newPointOffset = 1 / (currentPointsOnEdge + 1)

			for (let h = 0; h < currentPointsOnEdge; h++, r += 2) {
				const o = newPointOffset * (h + 1)
				result[r + 2] = (1 - o) * ax + o * bx
				result[r + 3] = (1 - o) * ay + o * by
			}
			if (addReminingPoints) {
				remainingPoints--
			}
		}
		result[finalBufferLength - 2] = buffer[bufferLen - 2]
		result[finalBufferLength - 1] = buffer[bufferLen - 1]

		return result
	}

	const result = new Float32Array(finalBufferLength)

	for (let i = 0; i < finalBufferLength; i += 2) {
		result[i] = buffer[i % bufferLen]
		result[i + 1] = buffer[(i + 1) % bufferLen]
	}

	return result
}

/**
 * Leads two buffers to have the same number of points
 *
 * @param from
 * @param to
 * @returns
 */
export function prepareBuffersForInterpolation(from: Float32Array, to: Float32Array): [Float32Array, Float32Array] {
	const fromBufferLength = from.length
	const toBufferLength = to.length

	if (fromBufferLength === toBufferLength) {
		return [from, to]
	}

	// const maxBufferLength = fromBufferLength > toBufferLength ? fromBufferLength : toBufferLength
	const difference = Math.abs(fromBufferLength - toBufferLength)
	// const minBufferLength = maxBufferLength - difference

	/////

	const b = fromBufferLength < toBufferLength ? to : from
	const t = fromBufferLength < toBufferLength ? from : to

	const a = distributePointsInBuffer(t, Math.floor(difference / 2))

	// a[maxBufferLength - 2] = t[minBufferLength - 2]
	// a[maxBufferLength - 1] = t[minBufferLength - 1]

	return fromBufferLength > toBufferLength ? [b, a] : [a, b]
}

/**
 * Interpolate two buffer
 *
 * @param from
 * @param to
 * @param offset
 * @returns
 */
export function interpolate(
	from: Float32Array,
	to: Float32Array,
	initialOffset: number | Array<number> = 0.5
): Float32Array {
	const [a, b] = prepareBuffersForInterpolation(from, to)
	const maxBufferLength = Math.max(a.length, b.length)
	const offset = typeof initialOffset === 'number' ? [initialOffset] : initialOffset
	const maxPoints = maxBufferLength / 2

	if (offset.length !== maxPoints) {
		const tl = offset.length
		for (let i = 0; i < maxPoints; i++) {
			offset[i] = offset[i % tl]
		}
	}

	////

	const result = new Float32Array(maxBufferLength)

	for (let i = 0, off = 0; i < maxBufferLength; i += 2, off++) {
		result[i] = (1 - offset[off]) * a[i] + offset[off] * b[i]
		result[i + 1] = (1 - offset[off]) * a[i + 1] + offset[off] * b[i + 1]
	}

	return result
}
