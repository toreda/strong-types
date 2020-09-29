import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsGreaterThan<CallerType> = (target: number) => CallerType;

export const greaterThanFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number' || typeof target !== 'number') {
		return false;
	}

	return curr > target;
};

export function makeIsGreaterThan<CallerType>(
	caller: CallerType,
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsGreaterThan<CallerType> {
	return (target: number): CallerType => {
		const fn: TBRuleFn = (curr: number) => {
			return greaterThanFn(curr, target);
		};

		const node = new TBRuleNode('IS_GT', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
