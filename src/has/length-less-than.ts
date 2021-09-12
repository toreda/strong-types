import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';
import {lessThanFn} from '../is/less-than';

export type HasLengthLessThan<CallerType> = (a: number) => CallerType;

export const hasLengthLessThan = (curr: unknown[] | string, target: number): boolean => {
	if (typeof curr.length !== 'number') {
		return false;
	}

	if (curr.length < 0) {
		return false;
	}

	return lessThanFn(curr.length, target);
};

export function makeHasLengthLessThan<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): HasLengthLessThan<CallerType> {
	return (target: number): CallerType => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string) => {
			return hasLengthLessThan(curr, target);
		};

		const node = new RuleNode<unknown[] | string>('HAS_LENGTH_LESS', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
