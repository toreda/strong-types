import KVPRuleCondition from './condition';
export default class KVPRuleStatement {
	public curr: KVPRuleCondition | null;
	private conditions: KVPRuleCondition[];

	constructor() {
		this.curr = null;
		this.conditions = [];
	}

}
