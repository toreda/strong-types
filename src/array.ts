import {TypeBox, TypeBoxNB, create, createNB} from './type-box';

import {TBRules} from './rules';

export type TBArray<T> = TypeBox<T[]>;
export type TBArrayNB<T> = TypeBoxNB<T[]>;

export function createArray<T>(initial: T[], fallback: T[]): TBArray<T> {
	const rules = new TBRules();
	rules.add().must.match.type.array();
	return create<T[]>(initial, fallback, rules);
}

export function createArrayNB<T>(initial: T[] | null, fallback: T[]): TBArrayNB<T> {
	const rules = new TBRules();
	rules.add().must.match.type.array();
	return createNB<T[]>(initial, fallback, rules);
}
