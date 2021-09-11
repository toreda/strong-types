import {Strong, makeStrong} from '../strong';

import {Rules} from '../rules';

export type Bool = Strong<boolean>;
export type StrongBoolean = Bool;

export function makeBoolean(fallback: boolean, initial?: boolean | null): Bool {
	const rules = new Rules();
	rules.add().must.match.type.boolean();

	return makeStrong<boolean>(fallback, initial, rules);
}
