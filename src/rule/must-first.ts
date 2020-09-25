import KVPOpEqualTo, {createEqualTo} from './operator/equal-to';
import KVPOpHaveLength, {createHaveLength} from './operator/have-length';

import KVPRule from './rule';
import KVPRuleBe from './be';
import KVPRuleHave from './have';
import KVPRuleMatch from './match';
import KVPRuleNot from './not';

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

		this.be = new KVPRuleBe(rule);
		this.have = new KVPRuleHave();
		this.not = new KVPRuleNot(rule);
		this.equal = createEqualTo<KVPRuleMust>(this, rule);
		this.match = new KVPRuleMatch(rule);
		this.haveLength = createHaveLength<KVPRuleMust>(this, rule);
	}
}
