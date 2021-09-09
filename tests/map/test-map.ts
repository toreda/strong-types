import {StrongInt, makeInt} from '../../src/types/int';
import {StrongString, makeString} from '../../src/types/string';

import {StrongMap} from '../../src/map';

export class TestMap extends StrongMap {
	intProp?: StrongInt;
	stringProp?: StrongString;
	arrayProp?: unknown[];
	objectProp?: Record<string, unknown>;
	strongMapProp?: TestMap;

	constructor(json: unknown) {
		super();

		if (json.intProp) this.intProp = makeInt(json.intProp);
		if (json.stringProp) this.stringProp = makeString(json.stringProp);

		if (json.arrayProp) this.arrayProp = json.arrayProp;
		if (json.objectProp) this.objectProp = json.objectProp;
		if (json.strongMapProp) this.strongMapProp = json.strongMapProp;
	}
}
