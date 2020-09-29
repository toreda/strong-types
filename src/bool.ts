import {TypeBox, TypeBoxNB, create, createNB} from './type-box';

import {TBRules} from './rules';

export type TBBool = TypeBox<boolean>;
export type TBBoolNB = TypeBoxNB<boolean>;

export function createBool(initial: boolean | null, fallback: boolean): TBBool {
	const rules = new TBRules();
	rules.add().must.match.type.integer();

	return create<boolean>(initial, fallback, rules);
}

export function createBoolNB(initial: boolean | null, fallback: boolean): TBBoolNB {
	const rules = new TBRules();
	rules.add().must.match.type.boolean();
	return createNB<boolean>(initial, fallback, rules);
}
