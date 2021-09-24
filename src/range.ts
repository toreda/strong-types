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

import {Double, doubleMake} from './double';

import {StrongMap} from './map';

/**
 * General numeric range with min and max value.
 *
 * @category Math
 */
export class Range extends StrongMap {
	public readonly min: Double;
	public readonly max: Double;

	constructor(defaultMin: number | null, defaultMax: number | null) {
		super();

		this.min = doubleMake(typeof defaultMin === 'number' ? defaultMin : 0);
		this.max = doubleMake(typeof defaultMax === 'number' ? defaultMax : 0);
	}

	/**
	 * Check if provided value exists between min and max range values (inclusive).
	 * @param value
	 * @returns
	 */
	public in(value: number, exclusive?: boolean): boolean {
		if (typeof value !== 'number') {
			return false;
		}

		// Value must be strict greater than range min and strictly less than the
		// range max in exclusive mode.
		if (exclusive === true) {
			return value > this.min() && value < this.max();
		} else {
			// Inclusive comparison requires value` be greater than or equal to range
			// min and less than or equal to range max.
			return value >= this.min() && value <= this.max();
		}
	}

	/**
	 * Reset min and max to initial values.
	 */
	public reset(): void {
		this.max.reset();
		this.min.reset();
	}
}
