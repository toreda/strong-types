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

import type {Float} from './float';
import {StrongMap} from './map';
import type {StrongTypeId} from './strong/type/id';
import {floatMake} from './float/make';

/**
 * Size object containing width & height properties as strong doubles.
 *
 * @category Maths
 */
export class Size extends StrongMap {
	public readonly width: Float;
	public readonly height: Float;
	public readonly typeId: StrongTypeId;
	public readonly baseType: StrongTypeId;

	constructor(defaultWidth: number | null, defaultHeight: number | null) {
		super();

		this.width = floatMake(typeof defaultWidth === 'number' ? defaultWidth : 0);
		this.height = floatMake(typeof defaultHeight === 'number' ? defaultHeight : 0);
		this.typeId = 'Size';
		this.baseType = 'StrongMap';
	}
}
