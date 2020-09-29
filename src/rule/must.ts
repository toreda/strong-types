import {TBOpIsEqualTo, createIsEqualTo} from '../validator/equal-to';

import {TBRule} from './rule';
import {TBRuleBe} from './be';
import {TBRuleHave} from './have';
import {TBRuleMatch} from './match';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNot} from './not';

export class TBRuleMust {
	public readonly be: TBRuleBe;
	public readonly have: TBRuleHave;
	public readonly not: TBRuleNot;
	public readonly equal: TBOpIsEqualTo<TBRuleMust>;
	public readonly match: TBRuleMatch;

	constructor(rules: TBRule[], parentRule: TBRule | null) {
		const rule = parentRule ? parentRule : new TBRule();
		if (!parentRule) {
			rules.push(rule);
		}

		const mods: TBRuleModifiers = {
			invert: false
		};

		this.be = new TBRuleBe(rule, mods);
		this.have = new TBRuleHave(rule, mods);
		this.not = new TBRuleNot(rule, mods);
		this.equal = createIsEqualTo<TBRuleMust>(this, rule, mods);
		this.match = new TBRuleMatch(rule, mods);
	}
}
