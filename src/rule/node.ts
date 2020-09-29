import {TBRuleFn} from './fn';
import {TBRuleNodeType} from './node-type';

export class TBRuleNode {
	public readonly id: string;
	public readonly children: TBRuleNode[];
	public readonly fn: TBRuleFn | null;
	public readonly type: TBRuleNodeType;
	public invertResult: boolean;

	constructor(id: string, type: TBRuleNodeType, fn: TBRuleFn | null, invert?: boolean) {
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
