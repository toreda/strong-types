import {TypeBox, TypeBoxNB, create, createNB} from './type-box';

import {TBRules} from './rules';

export type TBDouble = TypeBox<number>;

export type TBDoubleNB = TypeBoxNB<number>;

export function createDouble(initial: number | null, fallback: number): TBDouble {
	const rules = new TBRules<number>();

	rules.add().must.match.type.double();

	return create<number>(initial, fallback, rules);
}

export function createDoubleNB(initial: number | null, fallback: number): TBDoubleNB {
	const rules = new TBRules();
	rules.add().must.match.type.double();

	return createNB<number>(initial, fallback, rules);
}
