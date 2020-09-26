import KVPRuleNode from './node';
import KVPRuleNodeType from './node-type';

export default class KVPRule {
	public readonly nodes: KVPRuleNode[];

	constructor() {
		this.nodes = [];
	}

	public add(node: KVPRuleNode): void {
		if (node.type !== KVPRuleNodeType.CMP) {
			return;
		}

		this.nodes.push(node);
	}

	public run(value: any | null): boolean {
		if (!this.nodes.length) {
			return false;
		}

		let trueCount = 0;
		for (const node of this.nodes) {
			const result = node.execute(value);
			if (result) {
				trueCount++;
			}
		}

		// Require at least comparison in set of
		// OR operators to be true.
		return trueCount > 0;
	}
}
