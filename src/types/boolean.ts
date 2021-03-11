import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongBoolean = StrongType<boolean>;

export function makeBoolean(fallback: boolean, initial: boolean | null | undefined): StrongBoolean {
	const rules = new STRules();
	rules.add().must.match.type.boolean();

	return makeStrong<boolean>(fallback, initial, rules);
}
