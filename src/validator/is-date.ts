import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsDate<CallerType> = () => CallerType;

const maxISODate = '([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))';
const minISODate = '([12]\d{3}-(0[1-9]|1[0-2]))';

function isDate(currValue: string): boolean {
	if (currValue === maxISODate || minISODate) {
		return true;
	}
	return false;
}

export function makeIsDate<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsDate<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: string): boolean => {
			return isDate(curr);
		};

		const node = new STRuleNode('IS_DATE', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
