import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';
import {isHexColorFn} from './pattern/hex-color-code';

export type STOpIsIpv6Addr<CallerType> = () => CallerType;

export const isIpv6Addr = (curr: string): boolean => {
	if (typeof curr !== 'string') {
		return false;
	}

	if (!curr.trim()) {
		return false;
	}

	const section = curr.split(':');
	if (section.length >= 9) {
		return false;
	}

	if (section[0].length != 4) {
		return false;
	}

	//xxxx is hex value
	//Each section must be a valid hex code.
	//Fully formed explicit ipv6 addresses have exactly 7 semi-colons ( : ) and 8 sections.
	//Example: xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx

	//Can include fewer than 8 sections if:
	//There is exactly one double semi-colon ::
	//6 semi-colons at most in address.
	//Double semi-colon acts as an ellipse, filling any omitted sections with 0s:

	return isHexColorFn(curr);
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
