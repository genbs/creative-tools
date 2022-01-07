/**
 * Random number generator
 * @example
 * ```javascript
 * 	Urpflanze.random('seed') // 0.9367527104914188
 * ```
 *
 * @category Utilities
 * @param {string} seed
 * @param {number} min
 * @param {number} max
 * @param {number} decimals
 * @returns {number}
 */
export function random(seed?: string | number | null, min?: number, max?: number, decimals?: number): number;
/**
 * Evenly distributes a number of points in a buffer
 *
 * @param {Float32Array} buffer current buffer
 * @param {number} pointsToAdd points to add
 * @return {*}  {Float32Array}
 */
export function distributePointsInBuffer(buffer: Float32Array, pointsToAdd: number): Float32Array;
/**
 * Leads two buffers to have the same number of points
 *
 * @param from
 * @param to
 * @returns
 */
export function prepareBuffersForInterpolation(from: Float32Array, to: Float32Array): [Float32Array, Float32Array];
/**
 * Interpolate two buffer
 *
 * @param from
 * @param to
 * @param offset
 * @returns
 */
export function interpolate(from: Float32Array, to: Float32Array, initialOffset?: number | Array<number>): Float32Array;
/**
 * Convert number from radians to degrees
 *
 *
 * @example
 * ```javascript
 * toDegrees(Math.PI) // 180
 * ```
 *
 * @param {number} radians
 * @returns {number}
 */
export function toDegrees(radians: number): number;
/**
 * Convert angle from degrees to radians
 * @example
 * ```javascript
 * toRadians(180) // 3.141592653589793
 * ```
 *
 * @param {number} degrees
 * @returns {number}
 */
export function toRadians(degrees: number): number;
/**
 * Linear interpolation from `a` when `i` as 0 an `b` when `i' as 1
 *
 * @param {number} a
 * @param {number} b
 * @param {number} i
 * @returns {number}
 */
export function lerp(a: number, b: number, i: number): number;
/**
 * Return number between 0 and 1
 *
 * @export
 * @param {number} value
 * @return {*}  {number}
 */
export function clamp01(value: number): number;
/**
 * Return number between min and max
 *
 * @example
 * ```javascript
 * clamp(0, 1, 1.2) // 1
 * clamp(0, 1, -2) // 0
 * ```
 * @param {number} min
 * @param {number} max
 * @param {number} value
 * @returns {number}
 */
export function clamp(min: number, max: number, value: number): number;
/**
 * Map number between refMin e refMax from min and max
 *
 *
 * @example
 * ```javascript
 * relativeClamp(0, 1, 0.5, 100, 200) // 150
 * ```
 *
 * @param {number} refMin
 * @param {number} refMax
 * @param {number} value
 * @param {number} toMin
 * @param {number} toMax
 * @returns {number}
 */
export function relativeClamp(refMin: number, refMax: number, value: number, toMin: number, toMax: number): number;
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
export function noise(seed?: string, x?: number, y?: number, z?: number, min?: number, max?: number): number;
export function createCanvas(width: number, height: number): HTMLCanvasElement;
export type pixel = [number, number, number, number];
export function eachPixel(canvas: HTMLCanvasElement, callback: (pixel: pixel, x: number, y: number, count: number) => void | pixel): ImageData;
export type ImageDataSource = HTMLCanvasElement | ImageData;
export function pixelAt(canvasOrImageData: ImageDataSource, x: number, y: number, at: [number, number]): pixel;
export function pixelAtTop(canvasOrImageData: ImageDataSource, x: number, y: number, distance?: number): pixel;
export function pixelAtBottom(canvasOrImageData: ImageDataSource, x: number, y: number, distance?: number): pixel;
export function pixelAtLeft(canvasOrImageData: ImageDataSource, x: number, y: number, distance?: number): pixel;
export function pixelAtRight(canvasOrImageData: ImageDataSource, x: number, y: number, distance?: number): pixel;
export function pixelAtTopLeft(canvasOrImageData: ImageDataSource, x: number, y: number, distance?: number): pixel;
export function pixelAtTopRight(canvasOrImageData: ImageDataSource, x: number, y: number, distance?: number): pixel;
export function pixelAtBottomLeft(canvasOrImageData: ImageDataSource, x: number, y: number, distance?: number): pixel;
export function pixelAtBottomRight(canvasOrImageData: ImageDataSource, x: number, y: number, distance?: number): pixel;
export type fit = 'cover' | 'contain' | 'none';
export function fit(sourceWidth: number, sourceHeight: number, destWidth: number, destHeight: number, fit: fit): {
    x: number;
    y: number;
    width: number;
    height: number;
    scale: number;
};
export function loadImage(src: string): Promise<HTMLImageElement>;
export function fitImage(image: HTMLImageElement, width: number, height: number, mode?: fit): {
    x: number;
    y: number;
    width: number;
    height: number;
    scale: number;
};
/**
 * number between 0 and 255
 */
export type rgb = [number, number, number];
/**
 * number between 0 and 360, 0 and 100, 0 and 100
 */
export type hsl = [number, number, number];
/**
 * Convert RGB to HSL
 *
 * @export
 * @param {rgb} [r, g, b]
 * @return {*}  {hsl}
 */
export function rgbToHsl([r, g, b]: rgb): hsl;
/**
 *  * Convert HSL to RGB
 *
 * @export
 * @param {hsl} [h, s, l]
 * @return {*}  {rgb}
 */
export function hslToRgb([h, s, l]: hsl): rgb;
export function rgbToHex([r, g, b]: rgb): string;
/**
 * Brightness [0-255]
 *
 * @export
 * @param {rgb} [r, g, b]
 * @return {*}  {number from 0 to 255}
 */
export function brightness([r, g, b]: rgb): number;
/**
 * Luminance [0-1]
 *
 * @export
 * @param {rgb} [r, g, b]
 * @return {*}  {number from 0 to 1}
 */
export function luminance([r, g, b]: rgb): number;
export function isDark([r, g, b]: rgb): boolean;
export function isLight([r, g, b]: rgb): boolean;
/**
 * Get current timestamp in milliseconds
 *
 * @category Utilities
 * @returns {number}
 */
export function now(): number;

//# sourceMappingURL=types.d.ts.map
