import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsLength<CallerType> = (a: number) => CallerType;

export const isLengthFn = (curr: unknown[] | string, expectedLength: number): boolean => {
	if (!Array.isArray(curr) && typeof curr !== 'number' && typeof curr !== 'string') {
		return false;
	}

	if (typeof curr === 'string') {
		return curr.length === expectedLength;
	}

	if (typeof curr === 'number') {
		return curr === expectedLength;
	}

	return curr.length === expectedLength;
};

export function makeIsLength<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsLength<CallerType> {
	return (expectedLength: number): CallerType => {
		const fn: STRuleFn<unknown[] | string> = (curr: unknown[] | string): boolean => {
			return isLengthFn(curr, expectedLength);
		};

		const node = new STRuleNode('IS_LENGTH', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
