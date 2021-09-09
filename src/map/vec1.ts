import {StrongDouble, makeDouble} from '../types/double';

import {StrongMap} from '../map';

export class StrongVec1 extends StrongMap {
	public readonly x: StrongDouble;

	constructor(x: number | null) {
		super();

		this.x = makeDouble(0, x);
	}
}
