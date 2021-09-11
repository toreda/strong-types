import {StrongDouble, makeDouble} from '../types/double';

import {StrongMap} from '../map';

export class Vec1 extends StrongMap {
	public readonly x: StrongDouble;

	constructor(x: number | null) {
		super();

		this.x = makeDouble(0, x);
	}
}

export type StrongVec1 = Vec1;
