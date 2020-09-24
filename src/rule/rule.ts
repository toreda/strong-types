import KVPRuleModifiers from './modifiers';
import KVPRuleNode from './node';
import KVPRuleNodeType from './node-type';

export default class KVPRule {
	public readonly nodesRaw: KVPRuleNode[];
	public readonly nodes: KVPRuleNode[];
	public prevNode: KVPRuleNode | null;
	public readonly modifiers: KVPRuleModifiers;

	constructor() {
		this.nodesRaw = [];
		this.nodes = [];
		this.prevNode = null;
		this.modifiers = {
			invert: false
		};
	}

	public add(node: KVPRuleNode): void {
		this.nodesRaw.push(node);
	}

	public build(): void {
		if (!this.nodesRaw || !this.nodesRaw.length) {
			return;
		}

		for (let i = this.nodesRaw.length - 1; i--; i >= 0) {
			const curr = this.nodesRaw[i];
			this.buildNode(curr);
		}
	}

	public buildNode(node: KVPRuleNode): void {
		if (!node) {
			return;
		}

		switch (node.type) {
			case KVPRuleNodeType.CMP:
				this.buildOperator(node);
				break;

			case KVPRuleNodeType.OP:
				this.buildOperator(node);
				break;
		}
	}

	public buildOperator(node: KVPRuleNode): void {
		if (!this.prevNode) {
			this.prevNode = node;
			return;
		}

		if (this.prevNode.type === KVPRuleNodeType.CMP) {
			node.addChild(this.prevNode);
			this.prevNode = node;
		} else {
		}
	}

	public buildComparison(node: KVPRuleNode): void {
		if (!this.prevNode) {
			this.prevNode = node;
			return;
		}

		if (this.prevNode.type === KVPRuleNodeType.OP) {
		}
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
			const result = this.visit(node, value);
			if (result) {
				trueCount++;
			}
		}

		return true;
	}

	public visit(node: KVPRuleNode | null, value: any | null): boolean {
		if (!node) {
			return true;
		}

		for (const child of node.children) {
			this.visit(child, value);
		}

		if (!node.fn) {
			return true;
		}

		let result = true;

		try {
			result = node.fn(value);
		} catch (e) {
			result = false;
			console.error(`Failed to run rule node: ${e.message}.`);
		}

		return result;
	}

	public invert(): void {
		this.modifiers.invert = !this.modifiers.invert;
	}
}
