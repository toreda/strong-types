/**
 *	MIT License
 *
 *	Copyright (c) 2010 - 2021 Toreda, Inc.
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

import {Url, urlMake} from '../src/url';

import URL_SCHEMES from './_data/schemes';

const MOCK_FALLBACK_DEFAULT = 'Http://somedomain.com';
const MOCK_FALLBACK = 'Wss://somedomain.com:8080';
const EMPTY_STRING = '';

describe('Url', () => {
	let strongUrl: Url;
	beforeAll(() => {
		strongUrl = urlMake(MOCK_FALLBACK);
	});

	beforeEach(() => {
		strongUrl.reset();
	});

	describe('Implementation', () => {
		describe('Schemes', () => {
			for (const scheme of URL_SCHEMES) {
				it('should set initial value to sampleInitial argument', () => {
					const sampleInitial = 'http://dog.com';
					const result = urlMake(MOCK_FALLBACK_DEFAULT, sampleInitial);
					expect(result()).toBe(sampleInitial);
				});

				it('should not set value when called with a non-url string', () => {
					const sampleValue = 'test .com';
					strongUrl(sampleValue);
					expect(strongUrl()).toBe(MOCK_FALLBACK);
				});

				it('should not set value when called with an empty string', () => {
					strongUrl(EMPTY_STRING);
					expect(strongUrl()).toBe(MOCK_FALLBACK);
				});

				it('should return fallback default when value is null', () => {
					const sampleFallback = 'HTTPS://somedomain.com:888';
					const result = urlMake(sampleFallback);
					expect(result()).toBe(sampleFallback);
				});

				it('should return fallback default when value is undefined', () => {
					const sampleFallback = 'https://thebest.com';
					const result = urlMake(sampleFallback);
					expect(result()).toBe(sampleFallback);
				});

				it('should not set value when called with a number', () => {
					strongUrl(5 as any);
					expect(strongUrl()).toBe(MOCK_FALLBACK);
				});

				it('should not set value when called with a boolean value', () => {
					strongUrl(false as any);
					expect(strongUrl()).toBe(MOCK_FALLBACK);
				});

				it(`should set value when https url contains a query string and single param`, () => {
					const url = 'http://domain.com?param=111';
					expect(strongUrl()).toBe(MOCK_FALLBACK);
					strongUrl(url);
					expect(strongUrl()).toBe(url);
				});

				it(`should set value when http url contains a query string and single param`, () => {
					const url = 'http://otherdomain.com?param=222';
					expect(strongUrl()).toBe(MOCK_FALLBACK);
					strongUrl(url);
					expect(strongUrl()).toBe(url);
				});

				it(`should set value when url's querystring contains an escaped URL`, () => {
					const url = `https://somedomainHello?url=https%3A%2F%2Fwww.aol.com%2Fsome%2Fkeyword%3Fhere%3D1111`;
					expect(strongUrl()).toBe(MOCK_FALLBACK);
					strongUrl(url);
					expect(strongUrl()).toBe(url);
				});

				it(`should set value when a querystring param contains encoded text`, () => {
					const url = `https://somedomainHello?text=%20G%C3%BCnter`;
					expect(strongUrl()).toBe(MOCK_FALLBACK);
					strongUrl(url);
					expect(strongUrl()).toBe(url);
				});
			}
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 'https://grinch.com';
				const string = urlMake(MOCK_FALLBACK_DEFAULT);
				expect(string.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = 'http://test.com';
				const string = urlMake(MOCK_FALLBACK_DEFAULT, sampleInitial);
				expect(string.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
