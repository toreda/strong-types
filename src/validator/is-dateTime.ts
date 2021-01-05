import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsDateTime<CallerType> = () => CallerType;

function isDateTime(value: string): boolean {
	const result = Date.parse(value);
	if (isNaN(result) || typeof value !== 'string') {
		return false;
	}
	if (!isNaN(result)) {
		return true;
	}
	return !isNaN(result);
}

export function makeIsDateTime<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsDateTime<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: string): boolean => {
			return isDateTime(curr);
		};

		const node = new STRuleNode('IS_DATE_TIME', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
