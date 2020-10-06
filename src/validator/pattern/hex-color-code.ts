import {STRule} from '../../rule/rule';
import {STRuleFn} from '../../rule/fn';
import {STRuleModifiers} from '../../rule/modifiers';
import {STRuleNode} from '../../rule/node';
import {STRuleNodeType} from '../../rule/node-type';

export type STOpIsHexColorCode<CallerType> = () => CallerType;

const MIN_HEX_VALUE = 0x0;
const MAX_HEX_VALUE = 0xffffff;

export function isHexColorCode(value: number): boolean {
	if (isNaN(value)) {
		return false;
	}

	return value >= MIN_HEX_VALUE && value <= MAX_HEX_VALUE;
}

export function isHexColorCodeStr(value: string): boolean {
	if (typeof value !== 'string') {
		return false;
	}

	// Necessary trim to guarantee the # character check
	// succeeds if present.
	const trimmed = value.trim().toLowerCase();

	if (!trimmed) {
		return false;
	}

	// Remove first character when it's #, usually do to
	// string values like #FF0000.
	const cleaned = trimmed[0] === '#' ? trimmed.substring(1) : trimmed;

	let hexStr: string;
	if (cleaned.startsWith('0x')) {
		hexStr = cleaned;
	} else {
		hexStr = `0x${cleaned}`;
	}

	return isHexColorCode(Number(hexStr));
}

export const isHexColorFn = (curr: string | number): boolean => {
	if (typeof curr === 'string') {
		return isHexColorCodeStr(curr);
	}

	if (typeof curr === 'number') {
		return isHexColorCode(curr);
	}

	return false;
};

export function createIsHexColorCode<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsHexColorCode<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn = (curr: string): boolean => {
			return isHexColorFn(curr);
		};

		const node = new STRuleNode('IS_HEX_COLOR_CODE', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
