import KVPRuleChain from './rule/rule-chain';
import KVPRuleMust from './rule/must';

export default class KVPRules {
	public readonly must: KVPRuleMust;
	public rules: KVPRuleChain[];

	constructor() {
		this.rules = [];
		const chain: KVPRuleChain = new KVPRuleChain();
		this.rules.push(chain);
		this.must = new KVPRuleMust(chain);

	}
}
