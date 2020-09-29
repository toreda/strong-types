import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsArray<CallerType> = () => CallerType;

export function createIsArray<CallerType>(
	caller: CallerType,
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsArray<CallerType> {
	return (): CallerType => {
		const fn: TBRuleFn = (curr: any[]): boolean => {
			return Array.isArray(curr);
		};

		const node = new TBRuleNode('IS_ARRAY', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
