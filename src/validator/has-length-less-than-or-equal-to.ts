import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';
import {lessThanOrEqualToFn} from './is-less-than-or-equal-to';

export type STOpHasLengthLessThanOrEqualTo<CallerType> = (a: number) => CallerType;

export const hasLengthLessThanOrEqualTo = (curr: any, target: number): boolean => {
	if (typeof curr.length !== 'number') {
		return false;
	}

	if (curr.length < 0) {
		return false;
	}

	return lessThanOrEqualToFn(curr.length, target);
};

export function makeHasLengthLessThanOrEqualTo<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpHasLengthLessThanOrEqualTo<CallerType> {
	return (target: number): CallerType => {
		const fn: STRuleFn = (curr: any) => {
			return hasLengthLessThanOrEqualTo(curr, target);
		};

		const node = new STRuleNode('HAS_LENGTH_LESS_OR_EQL', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
