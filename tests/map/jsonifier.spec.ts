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

import {MapJsonifier as Jsonifier} from '../../src/map/jsonifier';
import {TestMap} from './test-map';
import {makeString} from '../../src/string';

describe('Jsonifier', () => {
	const instance = new Jsonifier();

	describe('Implementation', () => {
		describe('jsonifyKey', () => {
			it('should return undefined if key is undefined', () => {
				const expectedValue = undefined;
				const key = undefined;

				const result = instance.jsonifyKey(key);

				expect(result).toBe(expectedValue);
			});

			it('should return value of strong type', () => {
				const expectedValue = 'random string 9385';
				const key = makeString(expectedValue);

				const result = instance.jsonifyKey(key);

				expect(result).toBe(expectedValue);
			});

			it('should return value of a primitive key', () => {
				const expectedValue = 'random primitive key value';
				const key = expectedValue;

				const result = instance.jsonifyKey(key);

				expect(result).toBe(expectedValue);
			});

			const falseyValue = [false, 0, '', null].map((v) => [v, v]);

			it.each(falseyValue)('should return %p when key is %p', (key) => {
				const expectedValue = key;

				const result = instance.jsonifyKey(key);

				expect(result).toBe(expectedValue);
			});
		});

		describe('jsonifyMap', () => {
			it('should return record of key-value pairs when map is a 1-depth StrongMap', () => {
				const expectedValue = {
					stringProp: 'something basic',
					intProp: 42,
					arrayProp: [1, 4, 6],
					objectProp: {
						one: 2,
						three: 'four'
					}
				};
				const map = new TestMap(expectedValue);

				const result = instance.jsonifyMap(map);

				expect(result).toEqual(expectedValue);
			});

			it('should return record of key-values pairs when map is > 1-depth', () => {
				const expectedValue = {
					stringProp: 'first layer',
					strongMapProp: {
						stringProp: 'second layer',
						strongMapProp: {
							stringProp: 'third layer'
						}
					}
				};

				const mapLayer3 = new TestMap(expectedValue.strongMapProp.strongMapProp);
				const mapLayer2 = new TestMap({...expectedValue.strongMapProp, strongMapProp: mapLayer3});
				const mapLayer1 = new TestMap({...expectedValue, strongMapProp: mapLayer2});

				const result = instance.jsonifyMap(mapLayer1);

				expect(result).toStrictEqual(expectedValue);
			});
		});

		describe('jsonify', () => {
			it('should throw when map arg is undefined', () => {
				expect(() => {
					instance.jsonify(undefined as any);
				}).toThrow('Bad MapJsonifier.jsonify attempt - map arg missing.');
			});

			it('should throw when map arg is null', () => {
				expect(() => {
					instance.jsonify(null as any);
				}).toThrow('Bad MapJsonifier.jsonify attempt - map arg missing.');
			});

			it('should call jsonifyMap with map', () => {
				const spy = jest.spyOn(instance, 'jsonifyMap');
				const map = new TestMap({});

				instance.jsonify(map);

				expect(spy).toHaveBeenCalledWith(map);
			});
		});
	});
});
