import {Double, makeDouble} from './double';

/**
 * Map for passing coodinates in 2-dimensional
 * coordinate systems.
 *
 * @category Coordinates
 */
export class Vec2 {
	public readonly x: Double;
	public readonly y: Double;

	constructor(x: number | null, y: number | null) {
		this.x = makeDouble(0, x);
		this.y = makeDouble(0, y);
	}

	public reset(): void {
		this.x.reset();
		this.y.reset();
	}
}

/**
 * Vec2 alias for backwards compat.
 *
 * @category Coordinates
 */
export type StrongVec2 = Vec2;
