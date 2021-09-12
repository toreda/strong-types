import {Double, makeDouble} from './double';

import {Defaults} from './defaults';

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
		this.x = makeDouble(Defaults.Vec.X, x);
		this.y = makeDouble(Defaults.Vec.Y, y);
	}

	/**
	 * Reset all coordinate properties to default values.
	 */
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
