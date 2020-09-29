import {TBRule} from '../../rule/rule';
import {TBRuleFn} from '../../rule/fn';
import {TBRuleModifiers} from '../../rule/modifiers';
import {TBRuleNode} from '../../rule/node';
import {TBRuleNodeType} from '../../rule/node-type';

export type TBOpIsHexColorCode<CallerType> = () => CallerType;

export function isHexColorCode(value: number): boolean {
	if (isNaN(value)) {
		return false;
	}

	return value >= 0 && value <= 16777215;
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
	rule: TBRule,
	mods: TBRuleModifiers
): TBOpIsHexColorCode<CallerType> {
	return (): CallerType => {
		const fn: TBRuleFn = (curr: string): boolean => {
			return isHexColorFn(curr);
		};

		const node = new TBRuleNode('IS_HEX_COLOR_CODE', TBRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
