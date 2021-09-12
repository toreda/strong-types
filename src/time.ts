import {Strong, makeStrong} from './strong';

import {Rules} from './rules';

export type Time = Strong<string>;
export type StrongTime = Time;

export function makeTime(fallback: string, initial?: string | null): Time {
	const rules = new Rules();
	rules.add().must.match.type.string();
	rules.add().must.be.time();
	return makeStrong<string>(fallback, initial, rules);
}
