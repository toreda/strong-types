import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsLength<CallerType> = (a: number) => CallerType;

export const isLengthFn = (curr: any, expectedLength: number) => {
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

export function createIsLength<CallerType>(
	caller: CallerType,
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsLength<CallerType> {
	return (expectedLength: number): CallerType => {
		const fn: TBRuleFn = (curr: any): boolean => {
			return isLengthFn(curr, expectedLength);
		};

		const node = new TBRuleNode('HAS_LENGTH', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
