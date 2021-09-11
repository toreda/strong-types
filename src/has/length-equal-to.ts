import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';
import {equalToFn} from '../is/equal-to';

export type HasLengthEqualTo<CallerType> = (a: number) => CallerType;

export const hasLengthEqualTo = (curr: unknown[] | string, target: number): boolean => {
	if (typeof curr.length !== 'number') {
		return false;
	}

	if (curr.length < 0) {
		return false;
	}

	return equalToFn(curr.length, target);
};

export function makeHasLengthEqualTo<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): HasLengthEqualTo<CallerType> {
	return (target: number): CallerType => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string) => {
			return hasLengthEqualTo(curr, target);
		};

		const node = new RuleNode<unknown[] | string>('HAS_LENGTH_EQL', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
