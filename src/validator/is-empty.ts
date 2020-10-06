import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsEmpty<CallerType> = (a: any) => CallerType;

export const emptyFn = (curr: any[] | string): boolean => {
	if (!Array.isArray(curr) && typeof curr !== 'string') {
		return false;
	}

	if (typeof curr === 'string') {
		return curr === '';
	}

	return curr.length === 0;
};

export function makeIsEmpty<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsEmpty<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: any[] | string): boolean => {
			return emptyFn(curr);
		};

		const node = new STRuleNode('IS_EMPTY', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
