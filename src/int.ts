import {TypeBox, TypeBoxNB, create, createNB} from './type-box';

import {TBRules} from './rules';

export type TBInt = TypeBox<number>;
export type TBIntNB = TypeBoxNB<number>;
const rules = new TBRules();
rules.add().must.match.type.integer();

export function createInt(initial: number | null, fallback: number): TBInt {
	return create<number>(initial, fallback, rules);
}

export function createIntNB(initial: number | null, fallback: number): TBIntNB | null {
	return createNB<number>(initial, fallback, rules);
}
