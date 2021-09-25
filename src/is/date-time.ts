/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2021 Toreda, Inc.
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
 * Type signature for isDateTime validators used in rule chains.
 *
 * @category Validators
 */
export type IsDateTime<CallerT> = () => CallerT;

export function isDateTime(value: string): boolean {
	if (typeof value !== 'string') {
		return false;
	}

	if (!value.trim()) {
		return false;
	}

	if (value.includes('T') && !value.includes('GMT')) {
		const pieces = value.split('T');
		if (pieces.length !== 2) {
			return false;
		}

		const date = pieces[0].split('-');
		const time = pieces[1].split(':');

		if (date.length !== 3) {
			return false;
		}

		if (time.length >= 4) {
			return false;
		}
	}

	if (!value.includes('T')) {
		const segments = value.split(/(\s+)/);

		if (segments.length !== 3) {
			return false;
		}

		const dateSeg = segments[0].split('.');
		const emptySeg = segments[1].trim();
		const timeSeg = segments[2].split(':');

		if (dateSeg.length !== 3) {
			return false;
		}

		if (emptySeg !== '') {
			return false;
		}

		if (timeSeg.length >= 4) {
			return false;
		}
	}

	if (value.includes('GMT')) {
		const section = value.split('GMT');

		if (section.length >= 3) {
			return false;
		}

		const dateTimeSection = section[0].toString().trim().split(/(\s+)/);

		if (dateTimeSection.length !== 9) {
			return false;
		}
	}

	return true;
}

/**
 * Factory to create isDatetTime validator function used in rule chains.
 * @param caller
 * @param rule
 * @param mods
 * @returns
 *
 * @category Validator Factory
 */
export function isDateTimeMake<CallerT>(
	caller: CallerT,
	rule: Rule,
	mods: RuleMods
): IsDateTime<CallerT> {
	return (): CallerT => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isDateTime(curr);
		};

		const node = new RuleNode<string>('IS_DATE_TIME', RuleNodeType.CMP, fn, mods);
		rule.add(node);

		return caller;
	};
}
