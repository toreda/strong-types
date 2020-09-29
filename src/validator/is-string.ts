import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';
import {TypeBox} from '../type-box';
import {isType} from './is-type';

export type TBOpIsString<CallerType> = () => CallerType;

export function makeIsString<CallerType>(
	caller: CallerType,
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsString<CallerType> {
	return (): CallerType => {
		const fn: TBRuleFn = (curr: any): boolean => {
			return typeof curr === 'string';
		};

		const node = new TBRuleNode('IS_T_STR', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
