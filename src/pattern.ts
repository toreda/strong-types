import {IsHexColorCode, makeIsHexColorCode} from './is/hex-color-code';

import {Rule} from './rule';
import {RuleMods} from './rule/mods';

export class Pattern {
	public readonly hexColor: IsHexColorCode<Pattern>;

	constructor(rule: Rule, mods: RuleMods) {
		this.hexColor = makeIsHexColorCode<Pattern>(this, rule, mods);
	}
}
