import {StrongDouble, makeDouble} from '../types/double';

import {StrongMap} from '../map';

export class Vec2 extends StrongMap {
	public x: StrongDouble;
	public y: StrongDouble;

	constructor(x: number | null, y: number | null) {
		super();

		this.x = makeDouble(0, x);
		this.y = makeDouble(0, y);
	}
}

export type StrongVec2 = Vec2;
