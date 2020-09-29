import {TypeBox, TypeBoxNB, createTypeBox, createTypeBoxNB} from './type-box';

import {TBRules} from './rules';

export type TBBool = TypeBox<boolean>;
export type TBBoolNB = TypeBoxNB<boolean>;

export function createTBBool(initial: boolean | null, fallback: boolean): TBBool {
	const rules = new TBRules();
	rules.add().must.match.type.integer();

	return createTypeBox<boolean>(initial, fallback, rules);
}

export function createTBBoolNB(initial: boolean | null, fallback: boolean): TBBoolNB {
	const rules = new TBRules();
	rules.add().must.match.type.boolean();
	return createTypeBoxNB<boolean>(initial, fallback, rules);
}
