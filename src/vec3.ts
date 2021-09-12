import {Double, makeDouble} from './double';

/**
 * Map for passing coodinates in 3-dimensional
 * coordinate systems.
 *
 * @category Coordinates
 */
export class Vec3 {
	public readonly x: Double;
	public readonly y: Double;
	public readonly z: Double;

	constructor(x: number | null, y: number | null, z: number | null) {
		this.x = makeDouble(0, x);
		this.y = makeDouble(0, y);
		this.z = makeDouble(0, z);
	}

	public reset(): void {
		this.x.reset();
		this.y.reset();
		this.z.reset();
	}
}

/**
 * Vec3 alias for backwards compat.
 *
 * @category Coordinates
 */
export type StrongVec3 = Vec3;
