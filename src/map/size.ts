import {StrongMap} from '../map';
import {StrongDouble, makeDouble} from '../types/double';

export class StrongSize extends StrongMap {
	public readonly width: StrongDouble;
	public readonly height: StrongDouble;

	constructor(defaultWidth: number | null, defaultHeight: number | null) {
		super();

		this.width = makeDouble(0, defaultWidth);
		this.height = makeDouble(0, defaultHeight);
	}
}
