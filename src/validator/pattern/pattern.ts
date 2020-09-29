import {TBOpIsHexColorCode, createIsHexColorCode} from './hex-color-code';

import {TBRule} from '../../rule/rule';
import {TBRuleModifiers} from '../../rule/modifiers';

export class TBValidatorPattern {
	public readonly hexColor: TBOpIsHexColorCode<TBValidatorPattern>;

	constructor(rule: TBRule, mods: TBRuleModifiers) {
		this.hexColor = createIsHexColorCode(this, rule, mods);
	}
}
