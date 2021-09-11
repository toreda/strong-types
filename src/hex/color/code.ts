import {Strong, makeStrong} from '../../strong';

import {Rules} from '../../rules';

export type HexColorCode = Strong<string>;
export type StrongHextColorCode = HexColorCode;

/**
 * Create new strong hex color code object.
 * @param fallback
 * @param initial
 * @returns
 */
export function makeHexColorCode(fallback: string, initial?: string | null): HexColorCode {
	const rules = new Rules();
	rules.add().must.match.type.string();
	rules.add().must.be.hexColorCode();
	return makeStrong<string>(fallback, initial, rules);
}
