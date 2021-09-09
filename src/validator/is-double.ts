import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsDouble<CallerType> = () => CallerType;

export const isDouble = (curr: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	if (isNaN(curr)) {
		return false;
	}

	return true;
};

export function makeIsDouble<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsDouble<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn<number> = (curr: number): boolean => {
			return isDouble(curr);
		};

		const node = new STRuleNode<number>('IS_T_DOUBLE', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
