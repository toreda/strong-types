import {StrongDouble, makeDouble} from '../types/double';

import {StrongMap} from '../map';

export class Size extends StrongMap {
	public readonly width: StrongDouble;
	public readonly height: StrongDouble;

	constructor(defaultWidth: number | null, defaultHeight: number | null) {
		super();

		this.width = makeDouble(0, defaultWidth);
		this.height = makeDouble(0, defaultHeight);
	}
}

export type StrongSize = Size;
