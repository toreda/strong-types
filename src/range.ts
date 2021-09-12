import {StrongDouble, makeDouble} from './double';

import {StrongMap} from './map';

export class Range extends StrongMap {
	public readonly min: StrongDouble;
	public readonly max: StrongDouble;

	constructor(defaultMin: number | null, defaultMax: number | null) {
		super();

		this.min = makeDouble(0, defaultMin);
		this.max = makeDouble(0, defaultMax);
	}
}

export type StrongRange = Range;
