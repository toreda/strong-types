import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsEmpty<CallerType> = (a: unknown) => CallerType;

export const emptyFn = (curr: unknown[] | string): boolean => {
	if (!Array.isArray(curr) && typeof curr !== 'string') {
		return false;
	}

	if (typeof curr === 'string') {
		return curr === '';
	}

	return curr.length === 0;
};

export function makeIsEmpty<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsEmpty<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<unknown[] | string> = (curr: unknown[] | string): boolean => {
			return emptyFn(curr);
		};

		const node = new RuleNode('IS_EMPTY', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
