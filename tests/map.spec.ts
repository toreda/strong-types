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

import {MapJsonifier} from '../src/map/jsonifier';
import {MapParser} from '../src/map/parser';
import {StrongMap} from '../src/strong/map';
import {TestMap} from './map/test-map';

describe('StrongMap', () => {
	let instance: StrongMap;

	beforeAll(() => {
		instance = new StrongMap();
	});

	describe('Constructor', () => {
		it('should not throw when no arguments provided', () => {
			expect(() => {
				new StrongMap();
			}).not.toThrow();
		});
	});

	describe('Expected Class Methods', () => {
		describe('parse', () => {
			it(`should call parse with args provided map and json args`, () => {
				const json = {};
				const map = new TestMap({});
				const spy = jest.spyOn(MapParser.prototype, 'parse');

				map.parse(json);

				expect(spy).toHaveBeenCalledWith(map, json);
			});
		});

		describe('jsonify', () => {
			it('should call jsonify with provided map', () => {
				const map = new TestMap({});
				const spy = jest.spyOn(MapJsonifier.prototype, 'jsonify');

				map.jsonify();

				expect(spy).toHaveBeenCalledWith(map);
			});
		});
	});
});
