import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsDateTime<CallerType> = () => CallerType;

function isDateTime(value: string): boolean {
	if (typeof value !== 'string') {
		return false;
	}

	if (!value.trim()) {
		return false;
	}

	const pieces = value.split('T');
	if (pieces.length !== 2) {
		return false;
	}

	const date = pieces[0].split('-');
	const time = pieces[1].split(':');

	if (date.length !== 3) {
		return false;
	}

	if (time.length !== 3) {
		return false;
	}

	return true;
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
