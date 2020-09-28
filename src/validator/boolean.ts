import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsBoolean<CallerType> = () => CallerType;

export const isBooleanFn = (curr: boolean | null): boolean => {
	return curr === true || curr === false;
};

export function createIsBoolean<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsBoolean<CallerType> {
	return (): CallerType => {
		const fn: KVPRuleFn = (curr: null | boolean): boolean => {
			return isBooleanFn(curr);
		};

		const node = new KVPRuleNode('IS_EMPTY', KVPRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
