import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsGreaterThanOrEqualTo<CallerType> = (a: number) => CallerType;

export const greaterThanOrEqualToFn = (curr: number, target: number): boolean => {
	if (typeof curr !== 'number' || typeof target !== 'number') {
		return false;
	}

	return curr >= target;
};

export function createIsGreaterThanOrEqualTo<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsGreaterThanOrEqualTo<CallerType> {
	return (target: number): CallerType => {
		const fn: KVPRuleFn = (curr: number) => {
			return greaterThanOrEqualToFn(curr, target);
		};

		const node = new KVPRuleNode('GT_EQT', KVPRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
