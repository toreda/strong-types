//accepts string
//valid hexadecimal string
//see patterns folder
//allow hex code with or without #

import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongHexCode = StrongType<string>;

export function makeString(initial: string | null | undefined, fallback: string): StrongHexCode {
	const rules = new STRules();
	rules.add().must.match.type.string();
	return makeStrong<string>(initial, fallback, rules);
}
