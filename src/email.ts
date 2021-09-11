import {Strong, makeStrong} from './strong';

import {Rules} from './rules';

export type Email = Strong<string>;
export type StrongEmail = Email;

/**
 * Create Strong Email object with fallback and optional initial value.
 * @param fallback	Value returned when none is set.
 * @param initial	Starting value.
 * @returns			New strong Email object.
 */
export function makeEmail(fallback: string, initial?: string | null): Email {
	const rules = new Rules();
	rules.add().must.match.type.string();
	rules.add().must.be.email();
	return makeStrong<string>(fallback, initial, rules);
}
