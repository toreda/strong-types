import KVPRuleFn from './fn';
import KVPRuleNodeType from './node-type';

export default class KVPRuleNode {
	public readonly children: KVPRuleNode[];
	public readonly fn: KVPRuleFn | null;
	public readonly type: KVPRuleNodeType;

	constructor(type: KVPRuleNodeType, fn: KVPRuleFn | null) {
		this.children = [];
		this.fn = fn;
		this.type = type;
	}
}
