import {TypeBox, TypeBoxNB, make, makeNB} from '../type-box';

import {TBRules} from '../rules';

export type TBArray<T> = TypeBox<T[]>;
export type TBArrayNB<T> = TypeBoxNB<T[]>;

export function makeArray<T>(initial: T[] | null | undefined, fallback: T[]): TBArray<T> {
	const rules = new TBRules();
	rules.add().must.match.type.array();
	return make<T[]>(initial, fallback, rules);
}

export function makeArrayNB<T>(initial: T[] | null | undefined, fallback: T[]): TBArrayNB<T> {
	const rules = new TBRules();
	rules.add().must.match.type.array();
	return makeNB<T[]>(initial, fallback, rules);
}
