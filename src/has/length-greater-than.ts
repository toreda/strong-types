import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';
import {greaterThanFn} from '../is/greater-than';

export type STOpHasLengthGreaterThan<CallerType> = (a: number) => CallerType;

export const hasLengthGreaterThan = (curr: string | unknown[], target: number): boolean => {
	if (typeof curr.length !== 'number') {
		return false;
	}

	if (curr.length < 0) {
		return false;
	}

	return greaterThanFn(curr.length, target);
};

export function makeHasLengthGreaterThan<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): STOpHasLengthGreaterThan<CallerType> {
	return (target: number): CallerType => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string) => {
			return hasLengthGreaterThan(curr, target);
		};

		const node = new RuleNode<unknown[] | string>('HAS_LENGTH_GRT', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
