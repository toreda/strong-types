import {StrongDouble, makeDouble} from '../types/double';

export class StrongSize {
	public readonly width: StrongDouble;
	public readonly height: StrongDouble;

	constructor(defaultWidth: number | null, defaultHeight: number | null) {
		this.width = makeDouble(defaultWidth, 0);
		this.height = makeDouble(defaultHeight, 0);
	}
}
