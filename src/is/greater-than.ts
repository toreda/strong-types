import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsGreaterThan<CallerType> = (target: number) => CallerType;

export const greaterThanFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number' || typeof target !== 'number') {
		return false;
	}

	return curr > target;
};

export function makeIsGreaterThan<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsGreaterThan<CallerType> {
	return (target: number): CallerType => {
		const fn: RuleFn<number> = (curr: number) => {
			return greaterThanFn(curr, target);
		};

		const node = new RuleNode<number>('IS_GT', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
