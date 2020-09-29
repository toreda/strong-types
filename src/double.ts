import {TypeBox, TypeBoxNB, createTypeBox, createTypeBoxNB} from './type-box';

import {TBRules} from './rules';

export type TBDouble = TypeBox<number>;

export type TBDoubleNB = TypeBoxNB<number>;

export function createTBDouble(initial: number | null, fallback: number): TBDouble {
	const rules = new TBRules<number>();

	rules.add().must.match.type.double();

	return createTypeBox<number>(initial, fallback, rules);
}

export function createTBDoubleNB(initial: number | null, fallback: number): TBDoubleNB {
	const rules = new TBRules();
	rules.add().must.match.type.double();

	return createTypeBoxNB<number>(initial, fallback, rules);
}
