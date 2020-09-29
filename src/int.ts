import {TypeBox, TypeBoxNB, createTypeBox, createTypeBoxNB} from './type-box';

import {TBRules} from './rules';

export type TBInt = TypeBox<number>;
export type TBIntNB = TypeBoxNB<number>;
const rules = new TBRules();
rules.add().must.match.type.integer();

export function createTBInt(initial: number | null, fallback: number): TBInt {
	return createTypeBox<number>(initial, fallback, rules);
}

export function createTBIntNB(initial: number | null, fallback: number): TBIntNB | null {
	return createTypeBoxNB<number>(initial, fallback, rules);
}
