import {StrongInt, makeInt} from '../../src/types/int';
import {StrongString, makeString} from '../../src/types/string';

import {StrongMap} from '../../src/map';

export interface TestMapType {
	intProp: number;
	stringProp: string;
	arrayProp: string[];
	strongMapProp: StrongMap;
	objectProp: any;
}

export class TestMap extends StrongMap {
	intProp?: StrongInt;
	stringProp?: StrongString;
	arrayProp?: unknown[];
	objectProp?: Record<string, unknown>;
	strongMapProp?: TestMap;

	constructor(json: unknown) {
		super();

		const o = json as Record<string, unknown>;

		if (o.hasOwnProperty('intProp')) {
			this.intProp = makeInt(o.intProp as number);
		}

		if (o.hasOwnProperty('stringProp')) {
			this.stringProp = makeString(o.stringProp as string);
		}

		if (o.hasOwnProperty('arrayProp')) {
			this.arrayProp = o.arrayProp as unknown[];
		}

		if (o.hasOwnProperty('objectProp')) {
			this.objectProp = o.objectProp as any;
		}

		if (o.hasOwnProperty('strongMapProp')) {
			this.strongMapProp = o.strongMapProp as StrongMap;
		}
	}
}
