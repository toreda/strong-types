import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsLessThanOrEqualTo<CallerType> = (a: number) => CallerType;

export const lessThanOrEqualToFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number' || typeof target !== 'number') {
		return false;
	}

	return curr <= target;
};

export function makeIsLessThanOrEqualTo<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsLessThanOrEqualTo<CallerType> {
	return (target: number): CallerType => {
		const ruleFn: STRuleFn = (curr: number) => {
			return lessThanOrEqualToFn(curr, target);
		};

		const node = new STRuleNode('IS_LT_OR_EQT', STRuleNodeType.CMP, ruleFn, mods.invert);
		rule.add(node);

		return caller;
	};
}
