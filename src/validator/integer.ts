import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsInteger<CallerType> = () => CallerType;

export const isInteger = (curr: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	return Math.floor(curr) === curr;
};

export function createIsInteger<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsInteger<CallerType> {
	function int(): CallerType {
		const fn: KVPRuleFn = (curr: number): boolean => {
			return isInteger(curr);
		};

		const node = new KVPRuleNode('IS_INT', KVPRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	}

	return int;
}
