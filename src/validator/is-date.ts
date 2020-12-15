import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsDate<CallerType> = () => CallerType;

// prettier-ignore
const maxISODate = '([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))';
const minISODate = '([12]d{3}-(0[1-9]|1[0-2]))';
const timeString = '([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]';

function isDate(currValue: string): boolean {
	if (currValue === maxISODate || minISODate) {
		return true;
	}
	if (typeof currValue !== 'string') {
		return false;
	}
	if (currValue === timeString) {
		return false;
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
