import {StrongMap} from '../map';
import {StrongDouble, makeDouble} from '../types/double';

export class StrongVec1 extends StrongMap {
	public x: StrongDouble;

	constructor(x: number | null) {
		super();

		this.x = makeDouble(0, x);
	}
}
