import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';
import {greaterThanOrEqualToFn} from './is-greater-than-or-equal-to';

export type STOpHasLengthGreaterThanOrEqualTo<CallerType> = (a: number) => CallerType;

export const hasLengthGreaterThanOrEqualTo = (curr: unknown[] | string, target: number): boolean => {
	if (typeof curr.length !== 'number') {
		return false;
	}

	if (curr.length < 0) {
		return false;
	}

	return greaterThanOrEqualToFn(curr.length, target);
};

export function makeHasLengthGreaterThanOrEqualTo<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpHasLengthGreaterThanOrEqualTo<CallerType> {
	return (target: number): CallerType => {
		const fn: STRuleFn<unknown[] | string> = (curr: unknown[] | string) => {
			return hasLengthGreaterThanOrEqualTo(curr, target);
		};

		const node = new STRuleNode<unknown[] | string>(
			'HAS_LENGTH_GRT_OR_EQL',
			STRuleNodeType.CMP,
			fn,
			mods.invert
		);
		rule.add(node);

		return caller;
	};
}
