import {TypeBox, TypeBoxNB, createTypeBox, createTypeBoxNB} from './type-box';

import {TBRules} from './rules';

export type TBString = TypeBox<string>;

export type TBStringNB = TypeBoxNB<string>;

export function createTBString(initial: string, fallback: string): TBString {
	const rules = new TBRules();
	return createTypeBox<string>(initial, fallback, rules);
}

export function createTBStringNB(initial: string | null, fallback: string): TBStringNB {
	const rules = new TBRules();
	return createTypeBoxNB<string>(initial, fallback, rules);
}
