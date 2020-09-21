import KVPRule from './rule-node';

export default class KVPRuleChain {
	public rules: KVPRule[];
	public openLogicalOperator: string | null;
	public invertNextRule: boolean;

	constructor() {
		this.openLogicalOperator = null;
		this.invertNextRule = false;
		this.rules = [];
	}

	public or(): void {}

	public and(): void {}

	public not(): void {
		this.invertNextRule = !this.invertNextRule;
	}

	public operator(value: string): void {
		if (value !== 'or' && value !== 'and') {
			return;
		}

		this.openLogicalOperator = value;
	}

	public rule(rule: KVPRule): void {}
}
