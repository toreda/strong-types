import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsLength<CallerType> = (a: number) => CallerType;

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
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsLength<CallerType> {
	return (expectedLength: number): CallerType => {
		const fn: KVPRuleFn = (curr: any): boolean => {
			return isLengthFn(curr, expectedLength);
		};

		const node = new KVPRuleNode('HAS_LENGTH', KVPRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
