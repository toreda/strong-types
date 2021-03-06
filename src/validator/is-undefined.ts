import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsUndefined<CallerType> = () => CallerType;

function isUndefined(currValue: any): boolean {
	return typeof currValue === 'undefined';
}

export function makeIsUndefined<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsUndefined<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: number) => {
			return isUndefined(curr);
		};

		const node = new STRuleNode('IS_T_UNDEFINED', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
