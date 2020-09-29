import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsBoolean<CallerType> = () => CallerType;

export const isBooleanFn = (curr: boolean | null): boolean => {
	return curr === true || curr === false;
};

export function makeIsBoolean<CallerType>(
	caller: CallerType,
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsBoolean<CallerType> {
	return (): CallerType => {
		const fn: TBRuleFn = (curr: null | boolean): boolean => {
			return isBooleanFn(curr);
		};

		const node = new TBRuleNode('IS_T_BOOLEAN', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
