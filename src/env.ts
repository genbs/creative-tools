export const bNode =
	typeof process !== 'undefined' &&
	typeof process.versions !== 'undefined' &&
	typeof process.versions.node !== 'undefined'

export const bBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'

export const bWorker =
	typeof self === 'object' && ['ServiceWorkerGlobalScope', 'DedicatedWorkerGlobalScope'].includes(self.constructor.name)
