import {StrongDouble, makeDouble} from '../types/double';

export class StrongSize {
	public readonly width: StrongDouble;
	public readonly height: StrongDouble;

	constructor(defaultWidth: number | null, defaultHeight: number | null) {
		this.width = makeDouble(0, defaultWidth);
		this.height = makeDouble(0, defaultHeight);
	}
}
