import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongBoolean = StrongType<boolean, boolean>;
export type StrongBooleanNull = StrongType<boolean, null>;

export function makeBoolean(initial: boolean | null | undefined, fallback: boolean): StrongBoolean {
	const rules = new STRules();
	rules.add().must.match.type.boolean();

	return makeStrong<boolean>(initial, fallback, rules);
}

export function makeBooleanNull(initial: boolean | null | undefined, fallback: boolean): StrongBooleanNull {
	const rules = new STRules();
	rules.add().must.match.type.boolean();
	return makeStrong<boolean, null>(initial, fallback, rules);
}
