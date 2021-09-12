import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsEqual<CallerType> = (a: unknown) => CallerType;

export const equalToFn = (curr: unknown, target: unknown): boolean => {
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

export function makeIsEqual<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsEqual<CallerType> {
	return (target: unknown): CallerType => {
		const fn: RuleFn<unknown> = (curr: unknown): boolean => {
			return equalToFn(curr, target);
		};
		const node = new RuleNode('IS_EQ', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);
		return caller;
	};
}
