import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsEqualTo<CallerType> = (a: any) => CallerType;

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

export function makeIsEqualTo<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsEqualTo<CallerType> {
	return (target: any): CallerType => {
		const fn: STRuleFn = (curr: any): boolean => {
			return equalToFn(curr, target);
		};
		const node = new STRuleNode('IS_EQ', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);
		return caller;
	};
}
