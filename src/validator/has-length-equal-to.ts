import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';
import {equalToFn} from './is-equal-to';

export type STOpHasLengthEqualTo<CallerType> = (a: number) => CallerType;

export const hasLengthEqualTo = (curr: any, target: number): boolean => {
	if (curr.length <= -1) {
		return false;
	}

	if (!curr.length) {
		return false;
	}

	return equalToFn(curr.length, target);
};

export function makeHasLengthEqualTo<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpHasLengthEqualTo<CallerType> {
	return (target: number): CallerType => {
		const fn: STRuleFn = (curr: any) => {
			return hasLengthEqualTo(curr, target);
		};

		const node = new STRuleNode('HAS_LENGTH_EQL', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
