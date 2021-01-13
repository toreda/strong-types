import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';
import {lessThanFn} from './is-less-than';

export type STOpHasLengthLessThan<CallerType> = (a: number) => CallerType;

export const hasLengthLessThan = (curr: any, target: number): boolean => {
	if (curr.length <= -1) {
		return false;
	}

	if (!curr.length) {
		return false;
	}

	return lessThanFn(curr.length, target);
};

export function makeHasLengthLessThan<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpHasLengthLessThan<CallerType> {
	return (target: number): CallerType => {
		const fn: STRuleFn = (curr: any) => {
			return hasLengthLessThan(curr, target);
		};

		const node = new STRuleNode('HAS_LENGTH_LESS', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
