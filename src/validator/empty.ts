import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsEmpty<CallerType> = (a: any) => CallerType;

const emptyFn = (curr: any[] | string): boolean => {
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
		const ruleFn: KVPRuleFn = (curr: any[] | string): boolean => {
			const result = emptyFn(curr);
			if (mods.invert) {
				return !result;
			}

			return result;
		};

		const node = new KVPRuleNode('IS_EMPTY', KVPRuleNodeType.CMP, ruleFn);
		rule.add(node);

		return caller;
	}

	return empty;
}
