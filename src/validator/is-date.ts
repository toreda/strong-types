import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsDate<CallerType> = () => CallerType;

// prettier-ignore
const maxDate = '/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/';
// prettier-ignore
const medDate = '/^([12]\d{3}-(0[1-9]|1[0-2]))$/';
// prettier-ignore
const minDate = '/^([12]\d{3})$/';
// prettier-ignore
const timeStr = '/^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/';
// prettier-ignore
// eslint-disable-next-line
const dateTimeStr = '/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/';

function isDate(currValue: string): boolean {
	if (typeof currValue !== 'string' || currValue.match(dateTimeStr) || currValue.match(timeStr)) {
		return false;
	}
	if (typeof currValue === 'string') {
		if (currValue.match(maxDate) || currValue.match(medDate) || currValue.match(minDate)) {
			return true;
		}
		return false;
	}
	return true;
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
