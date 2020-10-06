import {STRuleFn} from './fn';
import {STRuleNodeType} from './node-type';

export class STRuleNode {
	public readonly id: string;
	public readonly children: STRuleNode[];
	public readonly fn: STRuleFn | null;
	public readonly type: STRuleNodeType;
	public invertResult: boolean;

	constructor(id: string, type: STRuleNodeType, fn: STRuleFn | null, invert: boolean = false) {
		this.id = id;
		this.children = [];
		this.fn = fn;
		this.type = type;
		this.invertResult = invert === true ? true : false;
	}

	public execute(value: any | null): boolean {
		if (!this.fn) {
			return false;
		}

		const result = this.fn(value);
		if (!this.invertResult) {
			return result;
		} else {
			return !result;
		}
	}
}
