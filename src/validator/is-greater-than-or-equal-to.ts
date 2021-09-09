import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsGreaterThanOrEqualTo<CallerType> = (a: number) => CallerType;

export const greaterThanOrEqualToFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number' || typeof target !== 'number') {
		return false;
	}

	return curr >= target;
};

export function makeIsGreaterThanOrEqualTo<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsGreaterThanOrEqualTo<CallerType> {
	return (target: number): CallerType => {
		const fn: STRuleFn<number> = (curr: number) => {
			return greaterThanOrEqualToFn(curr, target);
		};

		const node = new STRuleNode<number>('IS_GT_OR_EQT', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
