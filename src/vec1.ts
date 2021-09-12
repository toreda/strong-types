import {Double, makeDouble} from './double';

import {Defaults} from './defaults';

/**
 * Map for passing coodinates in 1-dimensional
 * coordinate systems.
 *
 * @category Coordinates
 */
export class Vec1 {
	public readonly x: Double;

	constructor(x: number | null) {
		this.x = makeDouble(Defaults.Vec.X, x);
	}

	/**
	 * Reset all coordinate properties to default values.
	 */
	public reset(): void {
		this.x.reset();
	}
}

/**
 * Vec1 alias for backwards compat.
 *
 * @category Coordinates
 */
export type StrongVec1 = Vec1;
