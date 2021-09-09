import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsLessThan<CallerType> = (a: number) => CallerType;

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
	rule: STRule,
	mods: STRuleModifiers
): STOpIsLessThan<CallerType> {
	return (target: number): CallerType => {
		const fn: STRuleFn<number> = (curr: number) => {
			return lessThanFn(curr, target);
		};

		const node = new STRuleNode<number>('IS_LT', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
