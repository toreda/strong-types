import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsEqualTo<CallerType> = (a: any) => CallerType;

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
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsEqualTo<CallerType> {
	return (target: any): CallerType => {
		const fn: TBRuleFn = (curr: any): boolean => {
			return equalToFn(curr, target);
		};
		const node = new TBRuleNode('EQT', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);
		return caller;
	};
}
