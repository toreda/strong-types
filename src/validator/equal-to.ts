import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsEqualTo<CallerType> = (a: any) => CallerType;

export const equalToFn = (curr: any, target: any): boolean => {
	if (typeof target === 'undefined' || typeof curr === 'undefined') {
		return false;
	}

	if (Array.isArray(curr) && Array.isArray(target)) {
		if (curr.length !== target.length) {
			return false;
		}

		// Naive check for equality. Will produce false negative
		// if the arrays have the same contents in a different order.
		for (let i = 0; i < curr.length; i++) {
			if (curr[i] !== target[i]) {
				return false;
			}
		}

		return true;
	}

	return curr === target;
};

export function createIsEqualTo<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsEqualTo<CallerType> {
	return (target: any): CallerType => {
		const fn: KVPRuleFn = (curr: any): boolean => {
			return equalToFn(curr, target);
		};
		const node = new KVPRuleNode('EQT', KVPRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);
		return caller;
	};
}
