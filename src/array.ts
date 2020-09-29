import {TypeBox, TypeBoxNB, createTypeBox, createTypeBoxNB} from './type-box';

import {TBRules} from './rules';

export type TBArray<T> = TypeBox<T[]>;
export type TBArrayNB<T> = TypeBoxNB<T[]>;

export function createTBArray<T>(initial: T[], fallback: T[]): TBArray<T> {
	const rules = new TBRules();
	return createTypeBox<T[]>(initial, fallback, rules);
}

export function createTBArrayNB<T>(initial: T[] | null, fallback: T[]): TBArrayNB<T> {
	const rules = new TBRules();
	return createTypeBoxNB<T[]>(initial, fallback, rules);
}
