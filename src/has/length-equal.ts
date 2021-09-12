import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';
import {equalToFn} from '../is/equal';

export type HasLengthEqual<CallerType> = (a: number) => CallerType;

export const hasLengthEqual = (curr: unknown[] | string, target: number): boolean => {
	if (typeof curr.length !== 'number') {
		return false;
	}

	if (curr.length < 0) {
		return false;
	}

	return equalToFn(curr.length, target);
};

export function makeHasLengthEqual<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): HasLengthEqual<CallerType> {
	return (target: number): CallerType => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string) => {
			return hasLengthEqual(curr, target);
		};

		const node = new RuleNode<unknown[] | string>('HAS_LENGTH_EQ', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
