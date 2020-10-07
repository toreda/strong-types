import {StrongDouble, makeDouble} from '../types/double';

export class StrongVec2 {
	public x: StrongDouble;
	public y: StrongDouble;

	constructor(x: number | null, y: number | null) {
		this.x = makeDouble(x, 0);
		this.y = makeDouble(y, 0);
	}
}
