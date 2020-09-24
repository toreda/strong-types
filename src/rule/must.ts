import {KVPOpEqualTo} from './operator/equal-to';
import {KVPOpHaveLength} from './operator/have-length';
import KVPRule from './rule';
import KVPRuleBe from './be';
import KVPRuleHave from './have';
import KVPRuleMatch from './match';
import KVPRuleNot from './not';
import createEqualTo from './operator/equal-to';
import createHaveLength from './operator/have-length';

export default class KVPRuleMust {
	public readonly be: KVPRuleBe;
	public readonly have: KVPRuleHave;
	public readonly not: KVPRuleNot;
	public readonly equal: KVPOpEqualTo<KVPRuleMust>;
	public readonly match: KVPRuleMatch;
	public readonly haveLength: KVPOpHaveLength<KVPRuleMust>;

	constructor(rules: KVPRule[], parentRule: KVPRule | null) {
		const rule = parentRule ? parentRule : new KVPRule();
		if (!parentRule) {
			rules.push(rule);
		}

		this.be = new KVPRuleBe(rules);
		this.have = new KVPRuleHave(rules);
		this.not = new KVPRuleNot(rules);
		this.equal = createEqualTo<KVPRuleMust>(this, rules);
		this.match = new KVPRuleMatch(rules);
		this.haveLength = createHaveLength<KVPRuleMust>(this, rules);
	}
}
