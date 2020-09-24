import KVPRule from './rule/rule';
import KVPRuleMust from './rule/must';

export default class KVPRules<T> {
	public readonly must: KVPRuleMust;
	public readonly rules: KVPRule[];

	constructor() {
		this.rules = [];
		this.must = new KVPRuleMust(this.rules, null);
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
