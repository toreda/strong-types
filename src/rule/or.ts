import createMatchType, {KVPOpMatchType} from './type';
import createMatchTypes, {KVPOpMatchesTypes} from './types';

import KVPRuleChain from './rule-chain';
import KVPRuleMust from './must';
import KVPRuleOperator from './operator/operator';
import KVPRuleStatement from './statement';

export default class KVPRuleOr {
	public readonly must: KVPRuleMust;
	public readonly should: KVPRuleMust;
	public readonly is: KVPRuleMust;
	public readonly type: KVPOpMatchType<KVPRuleOr>;
	public readonly types: KVPOpMatchesTypes<KVPRuleOr>;

	constructor(chain: KVPRuleChain) {
		this.must = new KVPRuleMust(chain);
		this.should = this.must;
		this.is = this.must;
		this.type = createMatchType<KVPRuleOr>(this, chain);
		this.types = createMatchTypes<KVPRuleOr>(this, chain);
	}
}
