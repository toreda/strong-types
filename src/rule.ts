import {RuleNode} from './rule/node';
import {RuleNodeType} from './rule/node/type';

export class Rule {
	public readonly nodes: RuleNode<unknown>[];

	constructor() {
		this.nodes = [];
	}

	public add<NodeT>(node: RuleNode<NodeT>): void {
		if (node.type !== RuleNodeType.CMP) {
			return;
		}

		this.nodes.push(node as RuleNode<unknown>);
	}

	public run(value: unknown | null): boolean {
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
