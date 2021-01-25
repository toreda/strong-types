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
	const tooManyColons = current.split('::');
	const doubleColon = '::';

	if (!section.length) {
		return false;
	}

	if (section.length >= 9) {
		return false;
	}

	if (section.length === 8 && !section.every(isValidSegment) && current.includes(doubleColon)) {
		return false;
	}

	if (section.length <= 7 && !section.every(isValidSegment) && tooManyColons.length >= 3) {
		return false;
	}

	return true;
};

export const isValidSegment = (segment: string): boolean => {
	const hex = '0123456789abcdefABCDEF';

	if (!segment.length || segment.length != 4) {
		return false;
	}

	for (const char of segment) {
		if (!hex.includes(char)) {
			return false;
		}
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
