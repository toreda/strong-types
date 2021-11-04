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

import type {ANY} from '@toreda/types';
import {Rules} from '../rules';
import {StrongTypeId} from './type/id';
import {Transforms} from '../transforms';

/**
 * @category Core
 */
export class StrongData<ValueT> {
	public value: ValueT | null;
	public readonly initial: ValueT | null;
	public readonly fallbackDefault: ValueT;
	public readonly transforms: Transforms<ValueT>;
	public readonly rules: Rules<ValueT>;
	public readonly typeId: StrongTypeId;
	public readonly baseType: StrongTypeId;

	constructor(fallbackDefault: ValueT, value: ValueT | null, rules: Rules<ValueT>, typeId: StrongTypeId) {
		this.value = null;
		this.fallbackDefault = fallbackDefault;
		this.transforms = new Transforms<ValueT>(fallbackDefault);
		this.rules = rules;
		this.typeId = typeId;
		this.baseType = 'StrongData';
		this.initial = value;
		this.set(value);
	}

	/**
	 * Check if value passes this instance's rule validation.
	 * @param value
	 * @returns
	 */
	public check(value?: ValueT | null): boolean {
		if (value === undefined) {
			return false;
		}

		return this.rules.run(value);
	}

	public get(fallback: ValueT): ValueT {
		if (this.value === null) {
			if (fallback === undefined || fallback === null) {
				return this.fallbackDefault;
			}

			return fallback;
		}

		return this.value;
	}

	public set(value?: ValueT | null): boolean {
		if (value === undefined) {
			return false;
		}

		if (value === null) {
			this.value = null;
			return true;
		}

		const transformed = value;

		if (!this.check(value)) {
			return false;
		}

		this.value = transformed;

		return true;
	}

	public getNull(): ValueT | null {
		if (this.value === undefined || this.value === null) {
			return null;
		}

		return this.value;
	}

	public reset(): void {
		this.value = this.initial;
	}

	/**
	 * Divide current `value` by `divisor`. Result is zero when
	 * `divisor` or `value` are zero.
	 * @param divisor
	 * @returns
	 */
	public div(divisor: number): number | null {
		const curr = this.getNull();

		if (typeof divisor !== 'number' || typeof curr !== 'number') {
			return null;
		}

		if (divisor === 0 || curr === 0) {
			this.set(0 as ANY);
			return 0;
		}

		const result = curr / divisor;

		if (isNaN(result)) {
			return null;
		}

		this.set(result as ANY);
		return result;
	}

	public mul(value: number): number | null {
		const curr = this.getNull();
		if (typeof value !== 'number' || typeof curr !== 'number') {
			return null;
		}

		if (value === 0 || curr === 0) {
			this.set(0 as ANY);
			return 0;
		}

		const result = value * curr;
		return this.set(result as ANY) ? result : null;
	}

	/**
	 *
	 * @param exponent
	 * @returns
	 */
	public pow(exponent: number): number | null {
		const curr = this.getNull();

		if (typeof curr !== 'number' || curr === null) {
			return null;
		}

		const result = Math.pow(curr, exponent);
		if (isNaN(result)) {
			return null;
		}

		if (result >= Number.MAX_SAFE_INTEGER) {
			return null;
		}

		this.set(result as ANY);
		return result;
	}

	/**
	 * Add value to Strong Type's current value, if it is a numeric type. Operation
	 * ignored for non-numeric types.
	 * @param value
	 * @returns
	 */
	public add(value: number): number | null {
		const curr = this.getNull();

		if (typeof value !== 'number' || typeof curr !== 'number') {
			return null;
		}

		const result = value + curr;
		if (isNaN(result)) {
			return null;
		}

		if (result < Number.MIN_SAFE_INTEGER || result > Number.MAX_SAFE_INTEGER) {
			return null;
		}

		return this.set(result as ANY) ? result : null;
	}
}
