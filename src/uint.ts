import {TypeBox, TypeBoxNB, createTypeBox, createTypeBoxNB} from './type-box';

import {TBRules} from './rules';

export type TBUInt = TypeBox<number>;

export type TBUIntNB = TypeBoxNB<number>;

export function createTBUInt(initial: number | null, fallback: number): TBUInt {
	const rules = new TBRules<number>();

	rules.add().must.match.type.integer();
	rules.add().must.be.greaterThanOrEqualTo(0);

	return createTypeBox<number>(initial, fallback, rules);
}

export function createTBUIntNB(initial: number | null, fallback: number): TBUIntNB {
	const rules = new TBRules();
	return createTypeBoxNB<number>(initial, fallback, rules);
}
