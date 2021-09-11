import {Strong, makeStrong} from '../strong';

import {Rules} from '../rules';

export type StrongDate = Strong<string>;

export function makeDate(fallback: string, initial?: string | null): StrongDate {
	const rules = new Rules();
	rules.add().must.match.type.string();
	rules.add().must.be.date();
	return makeStrong<string>(fallback, initial, rules);
}
