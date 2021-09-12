import {StrongDouble, makeDouble} from './double';

/**
 * Map for passing coodinates in 1-dimensional
 * coordinate systems.
 *
 * @category Coordinates
 */
export class Vec1 {
	public readonly x: StrongDouble;

	constructor(x: number | null) {
		this.x = makeDouble(0, x);
	}
}

/**
 * Vec1 alias for backwards compat.
 *
 * @category Coordinates
 */
export type StrongVec1 = Vec1;
