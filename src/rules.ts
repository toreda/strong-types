import {STRule} from './rule/rule';
import {STRuleMust} from './rule/must';
import {STRuleRoot} from './rule/root';

export class STRules<T> {
	public readonly rules: STRule[];

	constructor() {
		this.rules = [];
	}

	public add(): STRuleRoot {
		return {
			must: new STRuleMust(this.rules, null)
		};
	}

	public run(value: T | null): boolean {
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
