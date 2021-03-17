/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {StrongMap} from 'src/map';
import {StrongInt, makeInt} from 'src/types/int';
import {StrongString, makeString} from 'src/types/string';

export class TestMap extends StrongMap {
	intProp?: StrongInt;
	stringProp?: StrongString;
	arrayProp?: any[];
	objectProp?: Record<string, any>;
	strongMapProp?: TestMap;

	constructor(json: any) {
		super();

		this.enabled(json.enabled);

		if (json.intProp) this.intProp = makeInt(json.intProp, json.intProp);
		if (json.stringProp) this.stringProp = makeString(json.stringProp, json.stringProp);

		if (json.arrayProp) this.arrayProp = json.arrayProp;
		if (json.objectProp) this.objectProp = json.objectProp;
		if (json.strongMapProp) this.strongMapProp = json.strongMapProp;
	}
}
