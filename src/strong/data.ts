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
import {StrongState} from './state';
import {Transforms} from '../transforms';

export class StrongData<ValueT> {
	public value: ValueT | null;
	public readonly fallbackDefault: ValueT;
	public readonly state: StrongState<ValueT>;
	public readonly transforms: Transforms<ValueT>;
	public readonly rules: Rules<ValueT>;

	constructor(fallbackDefault: ValueT, initial?: ValueT | null, rules?: Rules<ValueT>) {
		this.value = null;
		this.fallbackDefault = fallbackDefault;
		this.state = new StrongState<ValueT>();
		this.transforms = new Transforms<ValueT>(fallbackDefault);
		this.rules = rules ? rules : new Rules();
		this.set(initial);
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

		const passedValidation = this.rules.run(transformed);
		if (!passedValidation) {
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

	public add(amt: number): void {
		if (typeof amt !== 'number') {
			return;
		}

		const val = this.getNull();

		if (typeof val !== 'number') {
			return;
		}

		const setVal = val + amt;

		this.set(setVal as ANY);
	}
}
