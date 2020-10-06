import {StrongType, StrongTypeNB, makeStrong, makeStrongNB} from '../strong-type';

import {STRules} from '../rules';

export type StrongBoolean = StrongType<boolean>;
export type StrongBooleanNB = StrongTypeNB<boolean>;

export function makeStrongBoolean(initial: boolean | null | undefined, fallback: boolean): StrongBoolean {
	const rules = new STRules();
	rules.add().must.match.type.boolean();

	return makeStrong<boolean>(initial, fallback, rules);
}

export function makeStrongBooleanNB(initial: boolean | null | undefined, fallback: boolean): StrongBooleanNB {
	const rules = new STRules();
	rules.add().must.match.type.boolean();
	return makeStrongNB<boolean>(initial, fallback, rules);
}
