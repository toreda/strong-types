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

import {TransformFN} from './transform/fn';
import {TransformOptions} from './transform/options';

export class Transform<T> {
	public readonly id: string;
	public readonly label: string;
	public readonly fn: TransformFN<T>;

	constructor(fn: TransformFN<T>, options?: TransformOptions) {
		if (!fn) {
			throw new Error('STTransform init failed - fn argument missing.');
		}

		this.fn = fn;
		this.id = options && typeof options.id === 'string' ? options.id : 'ST_tf';
		this.label = `ST_filter_${this.id}`;
	}

	public run(value: T): T {
		let result = value;

		try {
			result = this.fn(value);
		} catch (e) {
			console.error(`[${this.label}]`);
		}

		return result;
	}
}
