import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsNull<CallerType> = () => CallerType;

export function makeIsNull<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsNull<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn<unknown | null> = (curr?: unknown | null): boolean => {
			return curr === null;
		};

		const node = new STRuleNode<unknown | null>('IS_NULL', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
