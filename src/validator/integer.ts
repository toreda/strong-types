import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsInteger<CallerType> = () => CallerType;

export const isInteger = (curr: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	return Math.floor(curr) === curr;
};

export function createIsInteger<CallerType>(
	caller: CallerType,
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsInteger<CallerType> {
	return (): CallerType => {
		const fn: TBRuleFn = (curr: number): boolean => {
			return isInteger(curr);
		};

		const node = new TBRuleNode('IS_INT', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
