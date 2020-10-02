import {TypeBox, TypeBoxNB, make, makeNB} from '../type-box';

import {TBRules} from '../rules';

export type TBBool = TypeBox<boolean>;
export type TBBoolNB = TypeBoxNB<boolean>;

export function makeBool(initial: boolean | null | undefined, fallback: boolean): TBBool {
	const rules = new TBRules();
	rules.add().must.match.type.boolean();

	return make<boolean>(initial, fallback, rules);
}

export function makeBoolNB(initial: boolean | null | undefined, fallback: boolean): TBBoolNB {
	const rules = new TBRules();
	rules.add().must.match.type.boolean();
	return makeNB<boolean>(initial, fallback, rules);
}
