import {Strong, makeStrong} from './strong';

import {Rules} from './rules';

export type Date = Strong<string>;
/** Date alias for backwards compat. */
export type StrongDate = Date;

export function makeDate(fallback: string, initial?: string | null): Date {
	const rules = new Rules();
	rules.add().must.match.type.string();
	rules.add().must.be.date();
	return makeStrong<string>(fallback, initial, rules);
}
