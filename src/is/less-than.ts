import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsLessThan<CallerType> = (a: number) => CallerType;

export const lessThanFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	if (typeof target !== 'number') {
		return false;
	}

	return curr < target;
};

export function makeIsLessThan<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsLessThan<CallerType> {
	return (target: number): CallerType => {
		const fn: RuleFn<number> = (curr: number) => {
			return lessThanFn(curr, target);
		};

		const node = new RuleNode<number>('IS_LT', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
