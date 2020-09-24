import KVPRuleModifiers from './modifiers';
import KVPRuleNode from './node';
import KVPRuleNodeType from './node-type';

export type RawNodeInfo = {
	ndx: number;
	element: KVPRuleNode;
};

export default class KVPRule {
	public readonly nodes: KVPRuleNode[];
	public prevNode: KVPRuleNode | null;
	public readonly modifiers: KVPRuleModifiers;
	public orOpCount: number;

	constructor() {
		this.orOpCount = 0;
		this.nodes = [];
		this.prevNode = null;
		this.modifiers = {
			invert: false
		};
	}

	public add(node: KVPRuleNode): void {
		if (node.type === KVPRuleNodeType.CMP) {
			if (this.modifiers.invert) {
				node.invertResult = true;
				this.modifiers.invert = false;
			}
		} else if (node.type === KVPRuleNodeType.OP) {
			switch (node.id) {
				case 'OR':
					this.orOpCount++;
					break;
			}
		}

		this.nodes.push(node);
	}

	public run(value: any | null): boolean {
		if (!Array.isArray(this.nodes)) {
			return false;
		}

		if (!this.nodes.length) {
			return true;
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

	public invertNextResult(): void {
		this.modifiers.invert = !this.modifiers.invert;
	}
}
