import {KVPRule} from '../rule/rule';
import {KVPRuleFn} from '../rule/fn';
import {KVPRuleModifiers} from '../rule/modifiers';
import {KVPRuleNode} from '../rule/node';
import {KVPRuleNodeType} from '../rule/node-type';

export type KVPOpIsGreaterThan<CallerType> = (target: number) => CallerType;

export const greaterThanFn = (curr: number, target: number): boolean => {
	return curr > target;
};

export function createIsGreaterThan<CallerType>(
	caller: CallerType,
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsGreaterThan<CallerType> {
	return (target: number): CallerType => {
		const fn: KVPRuleFn = (curr: number) => {
			return greaterThanFn(curr, target);
		};

		const node = new KVPRuleNode('GT', KVPRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	}
}
