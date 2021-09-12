import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';
import {lessThanOrEqualFn} from '../is/less-than-or-equal';

export type HasLengthLessThanOrEqual<CallerType> = (a: number) => CallerType;

export const hasLengthLessThanOrEqual = (curr: unknown[] | string, target: number): boolean => {
	if (typeof curr.length !== 'number') {
		return false;
	}

	if (curr.length < 0) {
		return false;
	}

	return lessThanOrEqualFn(curr.length, target);
};

export function makeHasLengthLessThanOrEqual<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): HasLengthLessThanOrEqual<CallerType> {
	return (target: number): CallerType => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string) => {
			return hasLengthLessThanOrEqual(curr, target);
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
