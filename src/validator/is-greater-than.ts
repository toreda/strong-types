import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsGreaterThan<CallerType> = (target: number) => CallerType;

export const greaterThanFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number' || typeof target !== 'number') {
		return false;
	}

	return curr > target;
};

export function makeIsGreaterThan<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsGreaterThan<CallerType> {
	return (target: number): CallerType => {
		const fn: STRuleFn<number> = (curr: number) => {
			return greaterThanFn(curr, target);
		};

		const node = new STRuleNode<number>('IS_GT', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
