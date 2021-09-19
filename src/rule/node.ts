import {RuleFn} from './fn';
import {RuleNodeType} from './node/type';

/**
 * @category Rules
 */
export class RuleNode<T> {
	public readonly id: string;
	public readonly children: RuleNode<unknown>[];
	public readonly fn: RuleFn<T>;
	public readonly type: RuleNodeType;
	public invertResult: boolean;

	constructor(id: string, type: RuleNodeType, fn: RuleFn<T>, invert = false) {
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
