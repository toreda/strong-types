import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsLength<CallerType> = (a: number) => CallerType;

export const isLengthFn = (curr: unknown[] | string, expectedLength: number): boolean => {
	if (!Array.isArray(curr) && typeof curr !== 'number' && typeof curr !== 'string') {
		return false;
	}

	if (typeof curr === 'string') {
		return curr.length === expectedLength;
	}

	if (typeof curr === 'number') {
		return curr === expectedLength;
	}

	return curr.length === expectedLength;
};

export function makeIsLength<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsLength<CallerType> {
	return (expectedLength: number): CallerType => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string): boolean => {
			return isLengthFn(curr, expectedLength);
		};

		const node = new RuleNode('IS_LENGTH', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
