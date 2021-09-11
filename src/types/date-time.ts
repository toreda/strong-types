import {Strong, makeStrong} from '../strong';

import {Rules} from '../rules';

export type StrongDateTime = Strong<string>;

export function makeDateTime(fallback: string, initial?: string | null): StrongDateTime {
	const rules = new Rules();
	rules.add().must.match.type.string();
	rules.add().must.be.dateTime();
	return makeStrong<string>(fallback, initial, rules);
}
