import {KVPOpIsHexColorCode, createIsHexColorCode} from './hex-color-code';

import {KVPRule} from '../../rule/rule';
import {KVPRuleModifiers} from '../../rule/modifiers';

export class KVPRulePattern {
	public readonly hexColor: KVPOpIsHexColorCode<KVPRulePattern>;

	constructor(rule: KVPRule, mods: KVPRuleModifiers) {
		this.hexColor = createIsHexColorCode(this, rule, mods);
	}
}
