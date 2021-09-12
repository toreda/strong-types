import {Double, makeDouble} from './double';

/**
 * Map for passing coodinates in 4-dimensional
 * coordinate systems.
 *
 * @category Coordinates
 */
export class Vec4 {
	public readonly x: Double;
	public readonly y: Double;
	public readonly z: Double;
	public readonly w: Double;

	constructor(x: number | null, y: number | null, z: number | null, w: number | null) {
		this.x = makeDouble(0, x);
		this.y = makeDouble(0, y);
		this.z = makeDouble(0, z);
		this.w = makeDouble(0, w);
	}

	public reset(): void {
		this.x.reset();
		this.y.reset();
		this.z.reset();
		this.w.reset();
	}
}

/**
 * Vec4 alias for backwards compat.
 *
 * @category Coordinates
 */
export type StrongVec4 = Vec4;
