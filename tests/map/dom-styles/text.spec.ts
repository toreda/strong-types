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

import {CSSText} from '../../../src/css/text';
import {Strong} from '../../../src/strong';

const EXPECTED_STRONG_PROPERTIES = [
	{name: 'decoration', expectedValueType: 'string', expectedValue: 'none'},
	{name: 'shadow', expectedValueType: 'string', expectedValue: '0'}
];

describe('CSSText', () => {
	let instance: CSSText;

	beforeAll(() => {
		instance = new CSSText();
	});

	describe('Constructor', () => {
		for (const prop of EXPECTED_STRONG_PROPERTIES) {
			describe(`strong property ${prop.name}`, () => {
				it(`should be a function`, () => {
					expect(instance).toHaveProperty(prop.name);
					expect(typeof instance[prop.name]).toBe('function');
				});

				it(`should have initial value '${prop.expectedValue}'`, () => {
					const strongType = instance[prop.name] as Strong<unknown>;
					const result = strongType();
					expect(typeof result).toBe(prop.expectedValueType);
					expect(result).toBe(prop.expectedValue);
				});
			});
		}
	});
});
