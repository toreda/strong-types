import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsNull<CallerType> = () => CallerType;

export function makeIsNull<CallerType>(
	caller: CallerType,
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsNull<CallerType> {
	return (): CallerType => {
		const fn: TBRuleFn = (curr: any): boolean => {
			return curr === null;
		};

		const node = new TBRuleNode('IS_NULL', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
