import KVPRuleFn from './fn';
import KVPRuleNodeType from './node-type';

export default class KVPRuleNode {
	public readonly id: string;
	public readonly children: KVPRuleNode[];
	public readonly fn: KVPRuleFn | null;
	public readonly type: KVPRuleNodeType;
	public invertResult: boolean;

	constructor(id: string, type: KVPRuleNodeType, fn: KVPRuleFn | null) {
		this.id = id;
		this.children = [];
		this.fn = fn;
		this.type = type;
		this.invertResult = false;
	}

	public addChild(node: KVPRuleNode): void {
		this.children.push(node);
	}
}
