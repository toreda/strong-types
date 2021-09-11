import {Rule} from './rule';
import {RuleMust} from './rule/must';
import {RuleRoot} from './rule/root';

export class Rules<T> {
	public readonly rules: Rule[];

	constructor() {
		this.rules = [];
	}

	public add(): RuleRoot {
		return {
			must: new RuleMust(this.rules, null)
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
