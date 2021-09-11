import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';
import {lessThanOrEqualToFn} from '../is/less-than-or-equal-to';

export type STOpHasLengthLessThanOrEqualTo<CallerType> = (a: number) => CallerType;

export const hasLengthLessThanOrEqualTo = (curr: unknown[] | string, target: number): boolean => {
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
	rule: Rule,
	mods: RuleMods
): STOpHasLengthLessThanOrEqualTo<CallerType> {
	return (target: number): CallerType => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string) => {
			return hasLengthLessThanOrEqualTo(curr, target);
		};

		const node = new RuleNode<unknown[] | string>(
			'HAS_LENGTH_LESS_OR_EQL',
			RuleNodeType.CMP,
			fn,
			mods.invert
		);
		rule.add(node);

		return caller;
	};
}
