import {TypeBox, TypeBoxNB, make, makeNB} from '../type-box';

import {TBRules} from '../rules';

export type TBBoolean = TypeBox<boolean>;
export type TBBooleanNB = TypeBoxNB<boolean>;

export function makeBoolean(initial: boolean | null | undefined, fallback: boolean): TBBoolean {
	const rules = new TBRules();
	rules.add().must.match.type.boolean();

	return make<boolean>(initial, fallback, rules);
}

export function makeBooleanNB(initial: boolean | null | undefined, fallback: boolean): TBBooleanNB {
	const rules = new TBRules();
	rules.add().must.match.type.boolean();
	return makeNB<boolean>(initial, fallback, rules);
}
