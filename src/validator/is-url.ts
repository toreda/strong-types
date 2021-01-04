import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';
import {URL} from 'url';

export type STOpIsUrl<CallerType> = () => CallerType;

function isUrl(currValue: string): boolean {
	if (typeof currValue !== 'string') {
		return false;
	}
	let result = false;
	try {
		const url = new URL(currValue);
		result = true;
	} catch (e) {
		result = false;
	}
	return result;
}

export function makeIsUrl<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsUrl<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: string): boolean => {
			return isUrl(curr);
		};

		const node = new STRuleNode('IS_URL', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
