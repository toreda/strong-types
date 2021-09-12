import {Strong, makeStrong} from './strong';

import {Rules} from './rules';

export type StrongString = Strong<string>;

export function makeString(fallback: string, initial?: string | null): StrongString {
	const rules = new Rules();
	rules.add().must.match.type.string();
	return makeStrong<string>(fallback, initial, rules);
}
