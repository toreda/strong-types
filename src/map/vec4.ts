import {StrongDouble, makeDouble} from '../types/double';

export class StrongVec4 {
	public readonly x: StrongDouble;
	public readonly y: StrongDouble;
	public readonly z: StrongDouble;
	public readonly w: StrongDouble;

	constructor(x: number | null, y: number | null, z: number | null, w: number | null) {
		this.x = makeDouble(x, 0);
		this.y = makeDouble(y, 0);
		this.z = makeDouble(z, 0);
		this.w = makeDouble(w, 0);
	}
}
