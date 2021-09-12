import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';
import {greaterThanOrEqualFn} from '../is/greater-than-or-equal';

export type HasLengthGreaterThanOrEqual<CallerType> = (a: number) => CallerType;

export const hasLengthGreaterThanOrEqual = (curr: unknown[] | string, target: number): boolean => {
	if (typeof curr.length !== 'number') {
		return false;
	}

	if (curr.length < 0) {
		return false;
	}

	return greaterThanOrEqualFn(curr.length, target);
};

export function makeHasLengthGreaterThanOrEqual<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): HasLengthGreaterThanOrEqual<CallerType> {
	return (target: number): CallerType => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string) => {
			return hasLengthGreaterThanOrEqual(curr, target);
		};

		const node = new RuleNode<unknown[] | string>(
			'HAS_LENGTH_GRT_OR_EQL',
			RuleNodeType.CMP,
			fn,
			mods.invert
		);
		rule.add(node);

		return caller;
	};
}
