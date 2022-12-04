/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2022 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

/**
 * Type signature for isHexColorCode validators used in rule chains.
 *
 * @category Validators
 */
export type IsHexColorCode<CallerT> = () => CallerT;

const MIN_HEX_VALUE = 0x0;
const MAX_HEX_VALUE = 0xffffff;

/**
 * Accepts a number value and returns whether value is
 * a valid hex color code value.
 * @param value
 * @returns
 *
 * @category Validators
 */
export function isHexColorCode(value: number): boolean {
	if (isNaN(value)) {
		return false;
	}

	return value >= MIN_HEX_VALUE && value <= MAX_HEX_VALUE;
}

/**
 * Accepts a string value and returns whether value is
 * a valid hex color code string.
 * @param value
 * @returns
 *
 * @category Validators
 */
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

	if (value.length >= 9) {
		return false;
	}

	// Remove first character when it's #, usually do to string values like #FF0000.
	const cleaned = trimmed[0] === '#' ? trimmed.substring(1) : trimmed;

	let hexStr: string;
	if (cleaned.startsWith('0x')) {
		hexStr = cleaned;
	} else {
		hexStr = `0x${cleaned}`;
	}

	return isHexColorCode(Number(hexStr));
}

/**
 * Accepts a string or number value and returns whether provided
 * value is a valid hex color code.
 * @param curr
 * @returns
 *
 * @category Validators
 */
export function isHexColorFn(curr: string | number): boolean {
	if (typeof curr === 'string') {
		return isHexColorCodeStr(curr);
	}

	if (typeof curr === 'number') {
		return isHexColorCode(curr);
	}

	return false;
}

/**
 * Factory to create isHexColorCode validator function used in rule chains.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory Functions
 */
export function isHexColorCodeMake<CallerT>(
	caller: CallerT,
	rule: Rule,
	mods: RuleMods
): IsHexColorCode<CallerT> {
	return (): CallerT => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isHexColorFn(curr);
		};

		const node = new RuleNode<string>('IS_HEX_COLOR_CODE', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
