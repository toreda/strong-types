import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';
import {isType} from './is-type';

export type STOpIsString<CallerType> = () => CallerType;

export function makeIsString<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsString<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: any): boolean => {
			return typeof curr === 'string';
		};

		const node = new STRuleNode('IS_T_STR', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
