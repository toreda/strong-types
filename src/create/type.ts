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

import {Rules} from '../rules';
import {Strong} from '../strong';
import {StrongData} from '../strong/data';
import {StrongTypeId} from '../strong/type/id';

/**
 * Create a StrongType.
 * @param fallbackArg
 * @param initial
 * @param rules
 * @returns
 *
 * @category Core
 */
export function createType<ValueT>(
	fallbackValue: ValueT,
	value: ValueT | null,
	rules: Rules<ValueT>,
	typeId: StrongTypeId
): Strong<ValueT> {
	const instance = new StrongData<ValueT>(fallbackValue, value, rules, typeId);
	const localFallback = fallbackValue !== undefined ? fallbackValue : instance.fallbackDefault;

	const baseType: StrongTypeId = 'StrongType';

	return Object.assign(
		(val?: ValueT | null): ValueT => {
			if (typeof val !== 'undefined') {
				instance.set(val);
			}

			return instance.get(localFallback);
		},
		{
			/**
			 * Get current value and return provided fallback if
			 * @param fallback
			 * @returns
			 */
			get: (fallback: ValueT): ValueT => {
				return instance.get(fallback);
			},
			/**
			 * Get current value, or null if there isn't one.
			 * @returns		Current value when set, otherwise null.
			 */
			getNull: (): ValueT | null => {
				return instance.getNull();
			},
			/**
			 * Reset instance properties to their starting values.
			 */
			reset: (): void => {
				instance.reset();
			},
			/**
			 * Read-only check to determine if provided value passes
			 * rule validation for this instance.
			 * @param value
			 * @returns
			 */
			check: (target?: ValueT | null): boolean => {
				return instance.check(target);
			},
			typeId: typeId,
			baseType: baseType,
			_data: instance
		}
	);
}
