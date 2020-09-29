import {TypeBox, TypeBoxNB, make, makeNB} from '../type-box';

import {TBRules} from '../rules';

export type TBInt = TypeBox<number>;
export type TBIntNB = TypeBoxNB<number>;

export function makeInt(initial: number | null, fallback: number): TBInt {
	const rules = new TBRules();
	rules.add().must.match.type.integer();
	return make<number>(initial, fallback, rules);
}

export function makeIntNB(initial: number | null, fallback: number): TBIntNB | null {
	const rules = new TBRules();
	rules.add().must.match.type.integer();
	return makeNB<number>(initial, fallback, rules);
}
