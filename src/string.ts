import {TypeBox, TypeBoxNB, create, createNB} from './type-box';

import {TBRules} from './rules';

export type TBString = TypeBox<string>;

export type TBStringNB = TypeBoxNB<string>;

export function createString(initial: string, fallback: string): TBString {
	const rules = new TBRules();
	return create<string>(initial, fallback, rules);
}

export function createStringNB(initial: string | null, fallback: string): TBStringNB {
	const rules = new TBRules();
	return createNB<string>(initial, fallback, rules);
}
