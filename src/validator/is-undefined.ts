import {TBRule} from '../rule/rule';
import {TBRuleFn} from '../rule/fn';
import {TBRuleModifiers} from '../rule/modifiers';
import {TBRuleNode} from '../rule/node';
import {TBRuleNodeType} from '../rule/node-type';

export type TBOpIsUndefined<CallerType> = () => CallerType;

function isUndefined(currValue: any): boolean {
	return typeof currValue === 'undefined';
}

export function makeIsUndefined<CallerType>(
	caller: CallerType,
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsUndefined<CallerType> {
	return (): CallerType => {
		const fn: TBRuleFn = (curr: number) => {
			return isUndefined(curr);
		};

		const node = new TBRuleNode('IS_T_UNDEFINED', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
