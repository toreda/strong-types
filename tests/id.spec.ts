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

import {Id} from '../src/id';
import {idMake} from '../src/id/make';
const EMPTY_STRING = '';

describe('Id', () => {
	let id: Id;

	beforeAll(() => {
		id = idMake('');
	});

	beforeEach(() => {
		id.reset();
	});

	describe('Values', () => {
		it(`should set value when input is an empty string`, () => {
			id('aaaa');
			expect(id()).toBe('aaaa');
			id(EMPTY_STRING);
			expect(id()).toBe(EMPTY_STRING);
		});

		it(`should set string when no min or max lengths are set`, () => {
			const value = 'a97141197149174194714101947149174';
			id(value);
			expect(id()).toBe(value);
		});

		it(`should set value when input length is exactly equal to min length`, () => {
			const sampleId = idMake('a', null, {minLength: 5});
			expect(sampleId()).toBe('a');
			const input = 'aaaaa';
			sampleId(input);
			expect(sampleId()).toBe(input);
		});

		it(`should set value when input length is exactly equal to max length`, () => {
			const sampleId = idMake('b', null, {maxLength: 10});
			expect(sampleId()).toBe('b');
			const input = 'aaaaaaaaaa';
			sampleId(input);
			expect(sampleId()).toBe(input);
		});

		it(`should set value when input length is between min and max length`, () => {
			const sampleId = idMake('a', null, {minLength: 5, maxLength: 8});
			expect(sampleId()).toBe('a');
			const input = 'a913475';
			sampleId(input);
			expect(sampleId()).toBe(input);
		});

		it(`should not set value when input length is less than min length`, () => {
			const defaultValue = 'd1234567';
			const sampleId = idMake(defaultValue, null, {minLength: 6});
			expect(sampleId()).toBe(defaultValue);
			const input = 'abaa';
			sampleId(input);
			expect(sampleId()).toBe(defaultValue);
		});

		it(`should not set value when string does not contain substring from 'contains'`, () => {
			const value = 'aaaaaa';
			const sampleInit = 'random-string1111';
			const custom = idMake(sampleInit, null, {
				contains: 'bbbbbbb'
			});
			expect(custom()).toBe(sampleInit);
			custom(value);
			expect(custom()).toBe(sampleInit);
		});

		it(`should not set value when string it contains substring from 'contains'`, () => {
			const value = 'aaabbbb';
			const sampleInit = 'random-string1111';
			const custom = idMake(sampleInit, null, {
				contains: 'aaa'
			});
			expect(custom()).toBe(sampleInit);
			custom(value);
			expect(custom()).toBe(value);
		});

		it(`should not set value when string it contains one but not all substrings from 'contains'`, () => {
			const value = 'aaabbbb';
			const sampleInit = 'random-string1111';
			const custom = idMake(sampleInit, null, {
				contains: ['ccc', '000', 'aaa']
			});
			expect(custom()).toBe(sampleInit);
			custom(value);
			expect(custom()).toBe(sampleInit);
		});

		it(`should set value when string contains all substrings from 'contains' in any order`, () => {
			const value = 'aaa-ccc-000';
			const sampleInit = 'random-string1111';
			const custom = idMake(sampleInit, null, {
				contains: ['ccc', '000', 'aaa']
			});
			expect(custom()).toBe(sampleInit);
			custom(value);
			expect(custom()).toBe(value);
		});
	});

	describe('Reset', () => {
		it(`should reset to initial value`, () => {
			const initial = 'A971497141';
			const custom = idMake(initial);
			custom('aaa');
			expect(custom()).toBe('aaa');
			custom.reset();
			expect(custom()).toBe(initial);
		});
	});
});
