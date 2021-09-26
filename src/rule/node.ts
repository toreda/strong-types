import {RuleFn} from './fn';
import {RuleMods} from '../rule/mods';
import {RuleNodeTarget} from './node/target';
import {RuleNodeType} from '../rule/node/type';

/**
 * @category Rules
 */
export class RuleNode<T> {
	public readonly id: string;
	public readonly children: RuleNode<unknown>[];
	public readonly fn: RuleFn<T>;
	public readonly type: RuleNodeType;
	public target: RuleNodeTarget;
	public invertResult: boolean;

	constructor(id: string, type: RuleNodeType, fn: RuleFn<T>, mods: RuleMods) {
		this.id = id;

		if (typeof fn !== 'function') {
			throw new Error(`Bad rule init - fn arg is not a function.`);
		}

		this.type = type;
		this.children = [];
		this.fn = fn;
		this.target = mods.target;
		this.invertResult = mods.invert === true ? true : false;
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
