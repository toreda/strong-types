import KVPRuleModifiers from './modifiers';
import KVPRuleNode from './node';

export default class KVPRule {
	public readonly nodes: KVPRuleNode[];
	public curr: KVPRuleNode | null;
	public readonly modifiers: KVPRuleModifiers;

	constructor() {
		this.nodes = [];
		this.curr = null;
		this.modifiers = {
			invert: false
		};
	}

	public add(node: KVPRuleNode): void {

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
