import type {Int} from '../../src/int';
import {StrongMap} from '../../src/strong/map';
import type {Text} from '../../src/text';
import {intMake} from '../../src/int/make';
import {textMake} from '../../src/text/make';

export interface TestMapType {
	intProp: number;
	stringProp: string;
	arrayProp: string[];
	strongMapProp: StrongMap;
	objectProp: any;
}

export class TestMap extends StrongMap {
	intProp?: Int;
	stringProp?: Text;
	arrayProp?: unknown[];
	objectProp?: Record<string, unknown>;
	strongMapProp?: TestMap;

	constructor(json: unknown) {
		super();

		const o = json as Record<string, unknown>;

		if (o.hasOwnProperty('intProp')) {
			this.intProp = intMake(o.intProp as number);
		}

		if (o.hasOwnProperty('stringProp')) {
			this.stringProp = textMake(o.stringProp as string);
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
