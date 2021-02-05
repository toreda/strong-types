import {StrongDouble, makeDouble} from '../types/double';

export class StrongVec1 {
	public x: StrongDouble;

	constructor(x: number | null) {
		this.x = makeDouble(0, x);
	}
}
