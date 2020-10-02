import {TypeBox, TypeBoxNB, make, makeNB} from '../type-box';

import {TBRules} from '../rules';

export type TBString = TypeBox<string>;

export type TBStringNB = TypeBoxNB<string>;

export function makeString(initial: string | null | undefined, fallback: string): TBString {
	const rules = new TBRules();
	rules.add().must.match.type.string();
	return make<string>(initial, fallback, rules);
}

export function makeStringNB(initial: string | null | undefined, fallback: string): TBStringNB {
	const rules = new TBRules();
	rules.add().must.match.type.string();
	return makeNB<string>(initial, fallback, rules);
}
