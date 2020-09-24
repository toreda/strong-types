import KVPRuleChainFn from './chain-fn';

export default class KVPRuleChain {
	public operations: KVPRuleChainFn[];
	public openLogicalOperator: string | null;
	public invertNextRule: boolean;

	constructor() {
		this.openLogicalOperator = null;
		this.invertNextRule = false;
		this.operations = [];
	}

	public add(fn: KVPRuleChainFn): void {
		this.operations.push(fn);
	}

	public run(val: any | null): void {
		let curr: any | null = val;

		for (let i = 0; i < this.operations.length; i++) {
			const op = this.operations[i];

		}
	}

	public operator(value: string): void {
		if (value !== 'or' && value !== 'and') {
			return;
		}

		this.openLogicalOperator = value;
	}

}
