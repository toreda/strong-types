import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsLessThan<CallerType> = (a: number) => CallerType;

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
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsLessThan<CallerType> {
	return (target: number): CallerType => {
		const fn: TBRuleFn = (curr: number) => {
			return lessThanFn(curr, target);
		};

		const node = new TBRuleNode('IS_LT', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
