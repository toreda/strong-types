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

import {Float, floatMake} from './float';

import {Defaults} from './defaults';

/**
 * Map for passing coodinates in 2-dimensional
 * coordinate systems.
 *
 * @category Maths
 */
export class Vec2 {
	public readonly x: Float;
	public readonly y: Float;

	constructor(x: number | null, y: number | null) {
		this.x = floatMake(Defaults.Vec.X, x);
		this.y = floatMake(Defaults.Vec.Y, y);
	}

	/**
	 * Reset all coordinate properties to default values.
	 */
	public reset(): void {
		this.x.reset();
		this.y.reset();
	}
}

/**
 * Vec2 alias for backwards compat.
 *
 * @category Maths
 */
export type StrongVec2 = Vec2;
