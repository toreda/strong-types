import KVPRuleChain from './rule/chain';
import KVPRuleMust from './rule/must';

export default class KVPRules<T> {
	public readonly must: KVPRuleMust;
	public readonly chains: KVPRuleChain[];

	constructor() {
		this.chains = [];
		this.must = new KVPRuleMust(this.chains, null);
	}

	public run(value: T | null): boolean {
		for (const chain of this.chains) {
			if (!chain.run(value)) {
				return false;
			}
		}

		return true;
	}
}
