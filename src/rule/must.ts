import {STOpIsEqualTo, makeIsEqualTo} from '../validator/is-equal-to';

import {STRule} from './rule';
import {STRuleBe} from './be';
import {STRuleHave} from './have';
import {STRuleMatch} from './match';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNot} from './not';

export class STRuleMust {
	public readonly be: STRuleBe;
	public readonly have: STRuleHave;
	public readonly not: STRuleNot;
	public readonly equal: STOpIsEqualTo<STRuleMust>;
	public readonly match: STRuleMatch;

	constructor(rules: STRule[], parentRule: STRule | null) {
		const rule = parentRule ? parentRule : new STRule();
		if (!parentRule) {
			rules.push(rule);
		}

		const mods: STRuleModifiers = {
			invert: false
		};

		this.be = new STRuleBe(rule, mods);
		this.have = new STRuleHave(rule, mods);
		this.not = new STRuleNot(rule, mods);
		this.equal = makeIsEqualTo<STRuleMust>(this, rule, mods);
		this.match = new STRuleMatch(rule, mods);
	}
}
