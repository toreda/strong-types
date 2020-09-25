import KVPOpEqualTo, {createEqualTo} from './operator/equal-to';

import KVPRule from './rule';
import KVPRuleBe from './be';

export default class KVPRuleNot {
	public readonly be: KVPRuleBe;
	public readonly equal: KVPOpEqualTo<KVPRuleNot>;

	constructor(rule: KVPRule) {
		//rule.invertNextResult();
		this.be = new KVPRuleBe(rule);
		this.equal = createEqualTo<KVPRuleNot>(this, rule);
	}
}
