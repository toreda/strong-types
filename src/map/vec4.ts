import {StrongDouble, makeDouble} from '../types/double';

import {StrongMap} from '../map';

export class Vec4 extends StrongMap {
	public readonly x: StrongDouble;
	public readonly y: StrongDouble;
	public readonly z: StrongDouble;
	public readonly w: StrongDouble;

	constructor(x: number | null, y: number | null, z: number | null, w: number | null) {
		super();

		this.x = makeDouble(0, x);
		this.y = makeDouble(0, y);
		this.z = makeDouble(0, z);
		this.w = makeDouble(0, w);
	}
}

export type StrongVec4 = Vec4;
