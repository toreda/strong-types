import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';
import {greaterThanFn} from './is-greater-than';

export type STOpHasLengthGreaterThan<CallerType> = (a: number) => CallerType;

export const hasLengthGreaterThan = (curr: any, target: number): boolean => {
	if (typeof curr.length !== 'number') {
		return false;
	}

	if (curr.length < 0) {
		return false;
	}

	return greaterThanFn(curr.length, target);
};

export function makeHasLengthGreaterThan<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpHasLengthGreaterThan<CallerType> {
	return (target: number): CallerType => {
		const fn: STRuleFn = (curr: any) => {
			return hasLengthGreaterThan(curr, target);
		};

		const node = new STRuleNode('HAS_LENGTH_GRT', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
