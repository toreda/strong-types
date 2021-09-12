import {Double, makeDouble} from './double';

import {Defaults} from './defaults';

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
		this.x = makeDouble(Defaults.Vec.X, x);
		this.y = makeDouble(Defaults.Vec.Y, y);
		this.z = makeDouble(Defaults.Vec.Z, z);
		this.w = makeDouble(Defaults.Vec.W, w);
	}

	/**
	 * Reset all coordinate properties to default values.
	 */
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
