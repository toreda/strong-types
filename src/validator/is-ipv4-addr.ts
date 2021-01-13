import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';

export type STOpIsIpv4Addr<CallerType> = () => CallerType;

export const isIpv4Addr = (curr: string): boolean => {
	//Always a string.
	if (typeof curr !== 'string') {
		return false;
	}
	//Is valid if it has whitespace which can be trimmed with .trim()
	//Invalid if it contains any other whitespace which cannot be trimmed with .trim()
	if (!curr.trim()) {
		return false;
	}

	//Always has exactly four quads, and 3 periods.
	const pieces = curr.split('.');
	if (pieces.length !== 4) {
		return false;
	}

	const firstQuad = parseInt(pieces[0]);
	const secondQuad = parseInt(pieces[1]);
	const thirdQuad = parseInt(pieces[2]);
	const fourthQuad = parseInt(pieces[3]);

	//The first quad must be an integer between 1  and 255  (cannot be 0)
	//All other quads must be an integer between 0 and 255
	//Integers cannot have leading 0s
	if (firstQuad <= 0 || firstQuad >= 256) {
		return false;
	}

	if (
		secondQuad <= -1 ||
		secondQuad >= 256 ||
		thirdQuad <= -1 ||
		thirdQuad >= 256 ||
		fourthQuad <= -1 ||
		firstQuad >= 256
	) {
		return false;
	}

	return true;
};

export function makeIsIpv4Addr<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsIpv4Addr<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: string): boolean => {
			return isIpv4Addr(curr);
		};

		const node = new STRuleNode('IS_IP4_ADDR', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
