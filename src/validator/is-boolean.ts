import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsBoolean<CallerType> = () => CallerType;

export const isBooleanFn = (curr: boolean | null): boolean => {
	return curr === true || curr === false;
};

export function makeIsBoolean<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsBoolean<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: null | boolean): boolean => {
			return isBooleanFn(curr);
		};

		const node = new STRuleNode('IS_T_BOOLEAN', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
