import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsUrl<CallerType> = () => CallerType;

// prettier-ignore
// eslint-disable-next-line
const urlStr = /^((http|https|Http|Wss|HTTPS):\/\/)(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*:?[0-9]?[0-9]?[0-9]?[0-9]?$/;

function isUrl(currValue: string): boolean {
	if (typeof currValue !== 'string') {
		return false;
	}
	if (typeof currValue === 'string') {
		if (currValue.match(urlStr)) {
			return true;
		}
		return false;
	}
	return typeof currValue === 'string';
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
