import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsArray<CallerType> = () => CallerType;

export function makeIsArray<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsArray<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn<unknown[]> = (curr: unknown[]): boolean => {
			return Array.isArray(curr);
		};

		const node = new STRuleNode<unknown[]>('IS_T_ARRAY', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
