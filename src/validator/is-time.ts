import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsTime<CallerType> = () => CallerType;

const maxTime = '([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]';
const minTime = '([01]?[0-9]|2[0-3]):[0-5][0-9]';
const ISODate = '([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))';

function isTime(currValue: string): boolean {
	if (currValue === maxTime || minTime) {
		return true;
	} else if (currValue === ISODate) {
		return false;
	}
	return false;
}

export function makeIsTime<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsTime<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: string): boolean => {
			return isTime(curr);
		};

		const node = new STRuleNode('IS_TIME', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
