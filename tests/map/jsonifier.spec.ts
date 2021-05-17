import {StrongMapJsonifier as Jsonifier} from 'src/map/jsonifier';
import {StrongMapJsonifierState as State} from 'src/map/jsonifier/state';
import {makeString} from 'src/types/string';
import {TestMap} from './test-map';

describe('Jsonifier', () => {
	const instance = new Jsonifier();
	const state = new State();

	describe('Implementation', () => {
		describe('jsonifyKey', () => {
			it('should return undefined if key is undefined', () => {
				const expectedValue = undefined;
				const key = undefined;

				const result = instance.jsonifyKey(key, state);

				expect(result).toBe(expectedValue);
			});

			it('should return value of strong type', () => {
				const expectedValue = 'random string 9385';
				const key = makeString(expectedValue);

				const result = instance.jsonifyKey(key, state);

				expect(result).toBe(expectedValue);
			});

			it('should return value of a primitive key', () => {
				const expectedValue = 'random primitive key value';
				const key = expectedValue;

				const result = instance.jsonifyKey(key, state);

				expect(result).toBe(expectedValue);
			});

			const falseyValue = [false, 0, '', null].map((v) => [v, v]);

			it.each(falseyValue)('should return %p when key is %p', (key) => {
				const expectedValue = key;

				const result = instance.jsonifyKey(key, state);

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

				const result = instance.jsonifyMap(map, state);

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

				const result = instance.jsonifyMap(mapLayer1, state);

				expect(result).toStrictEqual(expectedValue);
			});
		});

		describe('jsonify', () => {
			it('should throw if map arg is missing', () => {
				expect(() => {
					instance.jsonify(null as any);
				}).toThrow('Failed to jsonify map - map arg missing');
			});

			it('should call jsonifyMap with map and state args', () => {
				const spy = jest.spyOn(instance, 'jsonifyMap');
				const map = new TestMap({});

				instance.jsonify(map);

				expect(spy).toHaveBeenCalledWith(map, expect.anything());
			});
		});
	});
});
