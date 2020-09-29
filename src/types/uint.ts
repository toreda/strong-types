import {TypeBox, TypeBoxNB, make, makeNB} from '../type-box';

import {TBRules} from '../rules';

export type TBUInt = TypeBox<number>;

export type TBUIntNB = TypeBoxNB<number>;

export function makeUInt(initial: number | null, fallback: number): TBUInt {
	const rules = new TBRules<number>();

	rules.add().must.match.type.integer();
	rules.add().must.be.greaterThanOrEqualTo(0);

	return make<number>(initial, fallback, rules);
}

export function makeUIntNB(initial: number | null, fallback: number): TBUIntNB {
	const rules = new TBRules();
	return makeNB<number>(initial, fallback, rules);
}
