import {KVPOpIsEqualTo, createIsEqualTo} from '../validator/equal-to';

import {KVPRule} from './rule';
import {KVPRuleBe} from './be';
import {KVPRuleModifiers} from './modifiers';

export class KVPRuleNot {
	public readonly be: KVPRuleBe;
	public readonly equal: KVPOpIsEqualTo<KVPRuleNot>;

	constructor(rule: KVPRule, parentMods: KVPRuleModifiers) {
		const mods: KVPRuleModifiers = {
			invert: !parentMods.invert
		};
		this.be = new KVPRuleBe(rule, mods);
		this.equal = createIsEqualTo<KVPRuleNot>(this, rule, mods);
	}
}
