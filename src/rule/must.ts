import {KVPOpIsEqualTo, createIsEqualTo} from '../validator/equal-to';

import {KVPRule} from './rule';
import {KVPRuleBe} from './be';
import {KVPRuleHave} from './have';
import {KVPRuleMatch} from './match';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNot} from './not';

export class KVPRuleMust {
	public readonly be: KVPRuleBe;
	public readonly have: KVPRuleHave;
	public readonly not: KVPRuleNot;
	public readonly equal: KVPOpIsEqualTo<KVPRuleMust>;
	public readonly match: KVPRuleMatch;

	constructor(rules: KVPRule[], parentRule: KVPRule | null) {
		const rule = parentRule ? parentRule : new KVPRule();
		if (!parentRule) {
			rules.push(rule);
		}

		const mods: KVPRuleModifiers = {
			invert: false
		};

		this.be = new KVPRuleBe(rule, mods);
		this.have = new KVPRuleHave(rule, mods);
		this.not = new KVPRuleNot(rule, mods);
		this.equal = createIsEqualTo<KVPRuleMust>(this, rule, mods);
		this.match = new KVPRuleMatch(rule, mods);
	}
}
