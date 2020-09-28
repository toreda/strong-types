import {KVPRule} from '../../rule/rule';
import {KVPRuleFn} from '../../rule/fn';
import {KVPRuleModifiers} from '../../rule/modifiers';
import {KVPRuleNode} from '../../rule/node';
import {KVPRuleNodeType} from '../../rule/node-type';

export type KVPOpIsHexColorCode<CallerType> = () => CallerType;

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
	rule: KVPRule,
	mods: KVPRuleModifiers
): KVPOpIsHexColorCode<CallerType> {
	return function validationFn(): CallerType {
		const fn: KVPRuleFn = (curr: string): boolean => {
			return isHexColorFn(curr);
		};

		const node = new KVPRuleNode('IS_HEX_COLOR_CODE', KVPRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
