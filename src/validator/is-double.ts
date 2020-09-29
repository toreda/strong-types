import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsDouble<CallerType> = () => CallerType;

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
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsDouble<CallerType> {
	return (): CallerType => {
		const fn: TBRuleFn = (curr: number): boolean => {
			return isDouble(curr);
		};

		const node = new TBRuleNode('IS_T_DOUBLE', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
