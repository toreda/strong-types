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
		for (const rule of this.rules) {
			if (!rule.run(value)) {
				return false;
			}
		}

		return true;
	}
}
