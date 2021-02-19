import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsDate<CallerType> = () => CallerType;

// prettier-ignore
// eslint-disable-next-line
const timeStr = 'T([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]';
const timeStr1 = 'T([01]?[0-9]|2[0-3]):[0-5][0-9]';
const timeStr2 = 'T([01]?[0-9]|2[0-3])';

function isDate(value: string): boolean {
	if (typeof value !== 'string') {
		return false;
	}

	const result = Date.parse(value);

	if (isNaN(result) || value.match(timeStr) || value.match(timeStr1) || value.match(timeStr2)) {
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
