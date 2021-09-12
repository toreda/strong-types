import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsGreaterThanOrEqual<CallerType> = (a: number) => CallerType;

export const greaterThanOrEqualFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number' || typeof target !== 'number') {
		return false;
	}

	return curr >= target;
};

export function makeIsGreaterThanOrEqual<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsGreaterThanOrEqual<CallerType> {
	return (target: number): CallerType => {
		const fn: RuleFn<number> = (curr: number) => {
			return greaterThanOrEqualFn(curr, target);
		};

		const node = new RuleNode<number>('IS_GT_OR_EQT', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
