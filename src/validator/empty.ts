import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsEmpty<CallerType> = (a: any) => CallerType;

export const emptyFn = (curr: any[] | string): boolean => {
	if (!Array.isArray(curr) && typeof curr !== 'string') {
		return false;
	}

	if (typeof curr === 'string') {
		return curr === '';
	}

	return curr.length === 0;
};

export function createIsEmpty<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsEmpty<CallerType> {
	function empty(): CallerType {
		const fn: KVPRuleFn = (curr: any[] | string): boolean => {
			return emptyFn(curr);
		};

		const node = new KVPRuleNode('IS_EMPTY', KVPRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	}

	return empty;
}
