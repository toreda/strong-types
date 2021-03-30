import {STRules} from '../rules';
import {StrongType, makeStrong} from '../strong-type';

export type StrongBoolean = StrongType<boolean>;

export function makeBoolean(fallback: boolean, initial?: boolean | null): StrongBoolean {
	const rules = new STRules();
	rules.add().must.match.type.boolean();

	return makeStrong<boolean>(fallback, initial, rules);
}
