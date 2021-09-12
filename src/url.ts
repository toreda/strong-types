import {Strong, makeStrong} from './strong';

import {Rules} from './rules';

/** Strong Url object type*/
export type Url = Strong<string>;
/** Alias for Url for temporary backwards compat. */
export type StrongUrl = Url;

/**
 * Create new strong Url object. Only valid Urls can be set.
 * @param fallback
 * @param initial
 * @returns
 */
export function makeUrl(fallback: string, initial?: string | null): Url {
	const rules = new Rules();
	rules.add().must.match.type.string();
	rules.add().must.be.url();

	return makeStrong<string>(fallback, initial, rules);
}
