import {TBRule} from './rule/rule';
import {TBRuleMust} from './rule/must';
import {TBRuleRoot} from './rule/root';

export class TBRules<T> {
	public readonly rules: TBRule[];

	constructor() {
		this.rules = [];
	}

	public add(): TBRuleRoot {
		return {
			must: new TBRuleMust(this.rules, null)
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
