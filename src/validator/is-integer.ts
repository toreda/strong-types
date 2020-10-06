import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsInteger<CallerType> = () => CallerType;

export const isInteger = (curr: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	return Math.floor(curr) === curr;
};

export function makeIsInteger<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsInteger<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: number): boolean => {
			return isInteger(curr);
		};

		const node = new STRuleNode('IS_T_INT', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
