import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsGreaterThanOrEqualTo<CallerType> = (a: number) => CallerType;

export const greaterThanOrEqualToFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number' || typeof target !== 'number') {
		return false;
	}

	return curr >= target;
};

export function createIsGreaterThanOrEqualTo<CallerType>(
	caller: CallerType,
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsGreaterThanOrEqualTo<CallerType> {
	return (target: number): CallerType => {
		const fn: TBRuleFn = (curr: number) => {
			return greaterThanOrEqualToFn(curr, target);
		};

		const node = new TBRuleNode('GT_EQT', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
