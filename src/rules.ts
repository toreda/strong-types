import KVPRule from './rule/rule';
import KVPRuleMust from './rule/must';
import KVPRuleRoot from './rule/root';

export default class KVPRules<T> {
	public readonly rules: KVPRule[];

	constructor() {
		this.rules = [];
	}

	public add(): KVPRuleRoot {
		return {
			must: new KVPRuleMust(this.rules, null)
		};
	}

	public run(value: T | null): boolean {
		console.info(
			`Rule run: ${value} - ${this.rules.length} rules: ${JSON.stringify(this.rules)}`
		);

		if (!this.rules || !this.rules.length) {
			return true;
		}

		for (const rule of this.rules) {
			if (!rule.run(value)) {
				return false;
			}
		}

		return true;
	}
}
