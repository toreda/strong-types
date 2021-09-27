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
import {Transforms} from '../transforms';

/**
 * @category Core
 */
export class StrongData<ValueT> {
	public value: ValueT | null;
	public readonly fallbackDefault: ValueT;
	public readonly transforms: Transforms<ValueT>;
	public readonly rules: Rules<ValueT>;

	constructor(fallbackDefault: ValueT, initial?: ValueT | null, rules?: Rules<ValueT>) {
		this.value = null;
		this.fallbackDefault = fallbackDefault;
		this.transforms = new Transforms<ValueT>(fallbackDefault);
		this.rules = rules ? rules : new Rules();

		this.set(initial);
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
			if (typeof fallback === 'undefined' || fallback === null) {
				return this.fallbackDefault;
			}

			return fallback;
		}

		return this.value;
	}

	public set(value?: ValueT | null): boolean {
		if (typeof value === 'undefined') {
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
		if (typeof this.value === 'undefined') {
			return null;
		}

		return this.value;
	}

	public reset(): void {
		this.value = null;
	}

	public mathVal(amt: number): number | null {
		if (typeof amt !== 'number') {
			return null;
		}

		const val = this.getNull();
		if (typeof val !== 'number') {
			return null;
		}

		return val;
	}

	/**
	 * Divide current `value` by `divisor`. Result is zero when
	 * `divisor` or `value` are zero.
	 * @param divisor
	 * @returns
	 */
	public div(divisor: number): number | null {
		const val = this.mathVal(divisor);

		if (val === null) {
			return null;
		}

		let result: number;

		if (val !== 0 && divisor !== 0) {
			result = val / divisor;
		} else {
			result = 0;
		}

		const success = this.set(result as ANY);

		return success ? result : null;
	}

	public mul(amt: number): number | null {
		const val = this.mathVal(amt);

		if (val === null) {
			return null;
		}

		const result = val * amt;
		const success = this.set(result as ANY);

		return success ? result : null;
	}

	/**
	 *
	 * @param exponent
	 * @returns
	 */
	public pow(exponent: number): number | null {
		const val = this.mathVal(exponent);

		if (val === null) {
			return null;
		}

		const result = Math.pow(val, exponent);
		const success = this.set(result as ANY);

		return success ? result : null;
	}

	public add(amt: number): number | null {
		const val = this.mathVal(amt);

		if (val === null) {
			return null;
		}

		const result = val + amt;

		const success = this.set(result as ANY);

		if (success) {
			return result;
		} else {
			return null;
		}
	}
}
