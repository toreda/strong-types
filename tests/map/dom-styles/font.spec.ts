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

import {CSSFont} from '../../../src/css/font';
import {Strong} from '../../../src/strong';

const EXPECTED_STRONG_PROPERTIES = [
	{name: 'color', expectedValueType: 'string', expectedValue: '#FFFFFF'},
	{name: 'size', expectedValueType: 'string', expectedValue: '12px'},
	{name: 'family', expectedValueType: 'string', expectedValue: 'sans-serif'},
	{name: 'weight', expectedValueType: 'string', expectedValue: 'normal'},
	{name: 'lineHeight', expectedValueType: 'string', expectedValue: 'normal'},
	{name: 'stretch', expectedValueType: 'string', expectedValue: 'normal'},
	{name: 'variant', expectedValueType: 'string', expectedValue: 'normal'}
];
describe('DomStylesFont', () => {
	let instance: CSSFont;

	beforeAll(() => {
		instance = new CSSFont();
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
