import {Strong, makeStrong} from './strong';

import {Rules} from './rules';

export type DateTime = Strong<string>;
/**
 * DateTime alias for backwards compat.
 */
export type StrongDateTime = DateTime;

export function makeDateTime(fallback: string, initial?: string | null): StrongDateTime {
	const rules = new Rules();
	rules.add().must.match.type.string();
	rules.add().must.be.dateTime();
	return makeStrong<string>(fallback, initial, rules);
}
