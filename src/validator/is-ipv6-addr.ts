import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsIpv6Addr<CallerType> = () => CallerType;

export const isIpv6Addr = (current: string): boolean => {
	if (typeof current != 'string') {
		return false;
	}

	if (!current.trim()) {
		return false;
	}

	const section = current.split(':');

	if (!section.length || (section.length >= 9 && !section.every(isValidSegment))) {
		return false;
	}
	//Can include fewer than 8 sections if:
	//There is exactly one double semi-colon ::
	//6 semi-colons at most in address.
	const doubleSemiColon = /::/;
	if (section.length < 8 && current.search(doubleSemiColon) && !section.every(isValidSegment)) {
		return false;
	}

	return true;
};

export const isValidSegment = (segment: any): boolean => {
	const isHexValue = 0xfff;

	if (!segment.length || segment.length > 4 || !segment.match(isHexValue)) {
		return false;
	}

	return true;
};

export function makeIsIpv6Addr<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsIpv6Addr<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: string): boolean => {
			return isIpv6Addr(curr);
		};

		const node = new STRuleNode('IS_IP6_ADDR', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
