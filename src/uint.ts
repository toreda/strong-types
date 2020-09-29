import {TypeBox, TypeBoxNB, create, createNB} from './type-box';

import {TBRules} from './rules';

export type TBUInt = TypeBox<number>;

export type TBUIntNB = TypeBoxNB<number>;

export function createUInt(initial: number | null, fallback: number): TBUInt {
	const rules = new TBRules<number>();

	rules.add().must.match.type.integer();
	rules.add().must.be.greaterThanOrEqualTo(0);

	return create<number>(initial, fallback, rules);
}

export function createUIntNB(initial: number | null, fallback: number): TBUIntNB {
	const rules = new TBRules();
	return createNB<number>(initial, fallback, rules);
}
