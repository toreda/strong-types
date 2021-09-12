import {BaseCollection} from '../base/collection';
import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type HasLengthEqual<CallerType> = (a: number) => CallerType;

export const hasLengthEqual = (curr: unknown[] | string, target: number): boolean => {
	if (curr === undefined || curr === null) {
		return false;
	}

	if (typeof target !== 'number') {
		return false;
	}

	if (typeof curr === 'string') {
		return curr.length === target;
	}

	if (Array.isArray(curr)) {
		return curr.length === target;
	}

	const obj = curr as BaseCollection;

	if (typeof obj.length !== 'number') {
		return false;
	}

	return obj.length === target;
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
