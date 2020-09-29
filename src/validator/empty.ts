import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsEmpty<CallerType> = (a: any) => CallerType;

export const emptyFn = (curr: any[] | string): boolean => {
	if (!Array.isArray(curr) && typeof curr !== 'string') {
		return false;
	}

	if (typeof curr === 'string') {
		return curr === '';
	}

	return curr.length === 0;
};

export function createIsEmpty<CallerType>(
	caller: CallerType,
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsEmpty<CallerType> {
	return (): CallerType => {
		const fn: TBRuleFn = (curr: any[] | string): boolean => {
			return emptyFn(curr);
		};

		const node = new TBRuleNode('IS_EMPTY', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
