import {IsEqualTo, makeIsEqualTo} from '../is/equal-to';

import {Rule} from '../rule';
import {RuleBe} from './be';
import {RuleHave} from './have';
import {RuleMatch} from './match';
import {RuleMods} from './mods';
import {RuleNot} from './not';

export class RuleMust {
	public readonly be: RuleBe;
	public readonly have: RuleHave;
	public readonly not: RuleNot;
	public readonly equal: IsEqualTo<RuleMust>;
	public readonly match: RuleMatch;

	constructor(rules: Rule[], parentRule: Rule | null) {
		const rule = parentRule ? parentRule : new Rule();
		if (!parentRule) {
			rules.push(rule);
		}

		const mods: RuleMods = {
			invert: false
		};

		this.be = new RuleBe(rule, mods);
		this.have = new RuleHave(rule, mods);
		this.not = new RuleNot(rule, mods);
		this.equal = makeIsEqualTo<RuleMust>(this, rule, mods);
		this.match = new RuleMatch(rule, mods);
	}
}
