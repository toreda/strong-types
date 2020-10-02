import {TypeBox, TypeBoxNB, make, makeNB} from '../type-box';

import {TBRules} from '../rules';

export type TBDouble = TypeBox<number>;

export type TBDoubleNB = TypeBoxNB<number>;

export function makeDouble(initial: number | null | undefined, fallback: number): TBDouble {
	const rules = new TBRules<number>();
	rules.add().must.match.type.double();

	return make<number>(initial, fallback, rules);
}

export function makeDoubleNB(initial: number | null | undefined, fallback: number): TBDoubleNB {
	const rules = new TBRules();
	rules.add().must.match.type.double();

	return makeNB<number>(initial, fallback, rules);
}
