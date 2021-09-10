import {STRuleFn} from './fn';
import {STRuleNodeType} from './node-type';

export class STRuleNode<T> {
	public readonly id: string;
	public readonly children: STRuleNode<unknown>[];
	public readonly fn: STRuleFn<T>;
	public readonly type: STRuleNodeType;
	public invertResult: boolean;

	constructor(id: string, type: STRuleNodeType, fn: STRuleFn<T>, invert = false) {
		this.id = id;

		if (typeof fn !== 'function') {
			throw new Error(`Bad rule init - fn arg is not a function.`);
		}

		this.children = [];
		this.fn = fn;
		this.type = type;
		this.invertResult = invert === true ? true : false;
	}

	public execute(value: T): boolean {
		const result = this.fn(value);
		if (!this.invertResult) {
			return result;
		} else {
			return !result;
		}
	}
}
