import {STRuleNode} from './node';
import {STRuleNodeType} from './node-type';

export class STRule {
	public readonly nodes: STRuleNode[];

	constructor() {
		this.nodes = [];
	}

	public add(node: STRuleNode): void {
		if (node.type !== STRuleNodeType.CMP) {
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
