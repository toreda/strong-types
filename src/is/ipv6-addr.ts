import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsIpv6Addr<CallerType> = () => CallerType;

export const isIpv6Addr = (current: string): boolean => {
	if (typeof current != 'string') {
		return false;
	}

	const trimmed = current.trim();

	if (!trimmed) {
		return false;
	}

	const sections = trimmed.split(':');
	const doubleColonSegment = trimmed.split('::');
	const doubleColon = '::';

	if (!sections.length) {
		return false;
	}

	if (sections.length > 8) {
		return false;
	}

	const validatedSegment = sections.every(isValidSegment);

	if (sections.length === 8 && !validatedSegment && current.includes(doubleColon)) {
		return false;
	}

	if (sections.length <= 7 && !validatedSegment && doubleColonSegment.length >= 3) {
		return false;
	}

	return true;
};

export const isValidSegment = (segment: string): boolean => {
	if (typeof segment !== 'string') {
		return false;
	}

	const hex = parseInt(segment, 16);

	if (isNaN(hex)) {
		return false;
	}
	return hex >= 0x0 && hex <= 0xffff;
};

export function makeIsIpv6Addr<CallerType>(
	caller: CallerType,
	rule: Rule,
	mods: RuleMods
): IsIpv6Addr<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isIpv6Addr(curr);
		};

		const node = new RuleNode<string>('IS_IP6_ADDR', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
