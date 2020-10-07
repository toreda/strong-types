import {StrongInt, makeInt} from '../../src/types/int';

import {StrongMap} from '../../src/map';
import {StrongMapParser} from '../../src/map/parser';
import {StrongMapParserState} from '../../src/map/parser/state';
import {makeStrong} from '../../src/strong-type';
const MOCK_VALUE = 11091;

describe('Parser', () => {
	let instance: StrongMapParser;
	let state: StrongMapParserState;

	beforeAll(() => {
		instance = new StrongMapParser();
		state = new StrongMapParserState();
	});

	describe('Constructor', () => {});

	describe('Implementation', () => {
		describe('parse', () => {
			let parseMapSpy;

			beforeAll(() => {
				parseMapSpy = jest.spyOn(instance, 'parseMap');
			});

			beforeEach(() => {
				parseMapSpy.mockReset();
			});

			afterAll(() => {
				parseMapSpy.mockRestore();
			});

			it('should not call parseMap when group arg is missing and no options arg provided', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const json = {};
				instance.parse(undefined as any, json);
				expect(parseMapSpy).not.toHaveBeenCalled();
			});

			it('should return false when group arg is missing and no options arg provided', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const json = {};
				expect(instance.parse(undefined as any, json)).toBe(false);
			});

			it('should not call parseMap when group arg is missing and options arg provided', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const json = {};
				const options = {};
				instance.parse(undefined as any, json, options);
				expect(parseMapSpy).not.toHaveBeenCalled();
			});

			it('should return false when group arg is missing and options arg provided', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const json = {};
				const options = {};
				expect(instance.parse(undefined as any, json, options)).toBe(false);
			});

			it('should return false when json arg is missing', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const options = {};
				const group = new StrongMap();
				expect(instance.parse(group, undefined as any)).toBe(false);
			});

			it('should not call parseMap when json arg is missing', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const options = {};
				const group = new StrongMap();
				instance.parse(group, undefined as any);
				expect(parseMapSpy).not.toHaveBeenCalled();
			});

			it('should call parseMap with provided group arg', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const options = {};
				const json = {};
				const group = new StrongMap();
				instance.parse(group, json);
				expect(parseMapSpy).toHaveBeenCalledWith(group, expect.anything(), expect.anything());
				expect(parseMapSpy).toHaveBeenCalledTimes(1);
			});

			it('should call parseMap with provided json arg', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const options = {};
				const json = {a: 'aaaa', b: '130991'};
				const group = new StrongMap();
				instance.parse(group, json);
				expect(parseMapSpy).toHaveBeenCalledWith(expect.anything(), json, expect.anything());
				expect(parseMapSpy).toHaveBeenCalledTimes(1);
			});

			it('should call parseMap with a new state object', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const options = {};
				const json = {c1: 'cnd_014981', d81: 'abw_01094'};
				const group = new StrongMap();
				instance.parse(group, json);
				expect(parseMapSpy).toHaveBeenCalledWith(
					expect.anything(),
					expect.anything(),
					expect.anything()
				);
				expect(parseMapSpy).toHaveBeenCalledTimes(1);
			});
		});

		describe('parseMap', () => {
			it('should not throw when node arg is missing', () => {
				expect(() => {
					instance.parseMap(undefined as any, {} as any, state);
					instance.parseMap(null as any, {} as any, state);
				}).not.toThrow();
			});

			it('should not throw when json arg is missing', () => {
				expect(() => {
					const map = new StrongMap();
					instance.parseMap(map, undefined as any, state);
				}).not.toThrow();
			});

			it('should parse group with children on node', () => {
				const expectedValue = 44120;
				const json = {
					group_one: {
						key_one: expectedValue
					}
				};

				const node = new StrongMap();
				node['group_one'] = new StrongMap();
				node['group_one']['key_one'] = makeInt(expectedValue, 1);

				instance.parseMap(node, json, new StrongMapParserState());
				expect(node['group_one']['key_one']()).toEqual(expectedValue);
			});

			it('should parse multiple groups which each have a single key', () => {
				const expectedValue1 = 881723;
				const expectedValue2 = true;
				const expectedValue3 = '@@@ string value here';

				const json = {
					group_one: {
						key_one: expectedValue1
					},
					group_two: {
						key_two: expectedValue2
					},
					group_three: {
						key_three: expectedValue3
					}
				};

				const node = new StrongMap();
				node['group_one'] = new StrongMap();
				node['group_one']['key_one'] = makeInt(expectedValue1, 0);

				node['group_two'] = new StrongMap();
				node['group_two']['key_two'] = makeStrong<boolean>(expectedValue2, false);

				node['group_three'] = new StrongMap();
				node['group_three']['key_three'] = makeStrong<string>(expectedValue3, 'bad string here');

				instance.parseMap(node, json, new StrongMapParserState());

				expect(node['group_one']['key_one']()).toEqual(expectedValue1);
				expect(node['group_two']['key_two']()).toEqual(expectedValue2);
				expect(node['group_three']['key_three']()).toEqual(expectedValue3);
			});

			it('should parse multiple groups which have each have multiple keys', () => {
				const expectedValue1_1 = 881723;
				const expectedValue1_2 = 'str here 1144';
				const expectedValue1_3 = 'str str str 44111';

				const expectedValue2_1 = true;
				const expectedValue2_2 = false;
				const expectedValue2_3 = false;

				const expectedValue3_1 = '@@@ string value here';
				const expectedValue3_2 = 'another str here 11411';
				const expectedValue3_3 = 'str here 22222';

				const json = {
					group_one: {
						key_one_one: expectedValue1_1,
						key_one_two: expectedValue1_2,
						key_one_three: expectedValue1_3
					},
					group_two: {
						key_two_one: expectedValue2_1,
						key_two_two: expectedValue2_2,
						key_two_three: expectedValue2_3
					},
					group_three: {
						key_three_one: expectedValue3_1,
						key_three_two: expectedValue3_2,
						key_three_three: expectedValue3_3
					}
				};

				const node = new StrongMap();
				node['group_one'] = new StrongMap();
				node['group_one']['key_one_one'] = makeInt(expectedValue1_1, 0);
				node['group_one']['key_one_two'] = makeStrong<string>(expectedValue1_2, '');
				node['group_one']['key_one_three'] = makeStrong<string>(expectedValue1_3, '');

				node['group_two'] = new StrongMap();
				node['group_two']['key_two_one'] = makeStrong<boolean>(expectedValue2_1, false);
				node['group_two']['key_two_two'] = makeStrong<boolean>(expectedValue2_2, true);
				node['group_two']['key_two_three'] = makeStrong<boolean>(expectedValue2_3, true);

				node['group_three'] = new StrongMap();
				node['group_three']['key_three_one'] = makeStrong<string>(expectedValue3_1, '3 - one one');
				node['group_three']['key_three_two'] = makeStrong<string>(expectedValue3_2, '3 - two two');
				node['group_three']['key_three_three'] = makeStrong<string>(
					expectedValue3_3,
					'3 - three three'
				);

				instance.parseMap(node, json, new StrongMapParserState());

				expect(node['group_one']['key_one_one']()).toEqual(expectedValue1_1);
				expect(node['group_one']['key_one_two']()).toEqual(expectedValue1_2);
				expect(node['group_one']['key_one_three']()).toEqual(expectedValue1_3);

				expect(node['group_two']['key_two_one']()).toEqual(expectedValue2_1);
				expect(node['group_two']['key_two_two']()).toEqual(expectedValue2_2);
				expect(node['group_two']['key_two_three']()).toEqual(expectedValue2_3);

				expect(node['group_three']['key_three_one']()).toEqual(expectedValue3_1);
				expect(node['group_three']['key_three_two']()).toEqual(expectedValue3_2);
				expect(node['group_three']['key_three_three']()).toEqual(expectedValue3_3);
			});
		});

		describe('parseKey', () => {
			it('should not throw when key arg is missing', () => {
				expect(() => {
					instance.parseKey(undefined as any, MOCK_VALUE, state);
				}).not.toThrow();

				expect(() => {
					instance.parseKey(null as any, MOCK_VALUE, state);
				}).not.toThrow();
			});

			it('should not throw when node arg is missing', () => {
				expect(() => {
					instance.parseMap(undefined as any, {} as any, state);
					instance.parseMap(null as any, {} as any, state);
				}).not.toThrow();
			});

			it('should not throw when key arg is not a KVP', () => {
				expect(() => {
					instance.parseKey({} as any, MOCK_VALUE, state);
				}).not.toThrow();
			});
		});
	});
});
