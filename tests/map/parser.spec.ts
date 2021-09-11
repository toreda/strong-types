import {StrongBoolean, makeBoolean} from '../../src/types/boolean';
import {StrongString, makeString} from '../../src/types/string';

import {MapParser} from '../../src/map/parser';
import {MapParserState} from '../../src/map/parser/state';
import {StrongInt} from '../../src/types/int';
import {StrongMap} from '../../src/map';
import {makeInt} from '../../src/types/int';

const MOCK_VALUE = 11091;
const MOCK_KEY_NAME = 'keyname-119714971';

class SampleGroupOne extends StrongMap {
	public key_one_one: StrongInt;
	public key_one_two: StrongString;
	public key_one_three: StrongString;

	constructor() {
		super();
		this.key_one_one = makeInt(0);
		this.key_one_two = makeString('');
		this.key_one_three = makeString('');
	}
}

class SampleGroupTwo extends StrongMap {
	public key_two_one: StrongBoolean;
	public key_two_two: StrongBoolean;
	public key_two_three: StrongBoolean;

	constructor() {
		super();
		this.key_two_one = makeBoolean(false);
		this.key_two_two = makeBoolean(false);
		this.key_two_three = makeBoolean(false);
	}
}

class SampleGroupThree extends StrongMap {
	public key_three_one: StrongString;
	public key_three_two: StrongString;
	public key_three_three: StrongString;

	constructor() {
		super();
		this.key_three_one = makeString('');
		this.key_three_two = makeString('');
		this.key_three_three = makeString('');
	}
}

class SampleMap extends StrongMap {
	public groupOne: SampleGroupOne;
	public groupTwo: SampleGroupTwo;
	public groupThree: SampleGroupThree;

	constructor(data?: unknown) {
		super();
		this.groupOne = new SampleGroupOne();
		this.groupTwo = new SampleGroupTwo();
		this.groupThree = new SampleGroupThree();

		this.parse(data);
	}
}

describe('Parser', () => {
	let sampleMap: StrongMap;
	let instance: MapParser;
	const state = new MapParserState();

	beforeAll(() => {
		sampleMap = new StrongMap();
		instance = new MapParser();
	});

	describe('Implementation', () => {
		describe('parse', () => {
			let parseMapSpy: jest.SpyInstance;

			beforeAll(() => {
				parseMapSpy = jest.spyOn(instance, 'parseMap');
			});

			beforeEach(() => {
				parseMapSpy.mockReset();
			});

			afterAll(() => {
				parseMapSpy.mockRestore();
			});

			it('should not call parseMap when group arg is missing', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const json = {};
				instance.parse(undefined as any, json);
				expect(parseMapSpy).not.toHaveBeenCalled();
			});

			it('should return false when group arg is missing', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const json = {};
				expect(instance.parse(undefined as any, json)).toBe(false);
			});

			it('should not call parseMap when group arg is missing', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const json = {};
				const options = {};
				instance.parse(undefined as any, json);
				expect(parseMapSpy).not.toHaveBeenCalled();
			});

			it('should return false when group arg is missing', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const json = {};
				const options = {};
				expect(instance.parse(undefined as any, json)).toBe(false);
			});

			it('should return false when json arg is missing', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const group = new StrongMap();
				expect(instance.parse(group, undefined as any)).toBe(false);
			});

			it('should not call parseMap when json arg is missing', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const group = new StrongMap();
				instance.parse(group, undefined as any);
				expect(parseMapSpy).not.toHaveBeenCalled();
			});

			it('should call parseMap with provided group arg', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const json = {};
				const group = new StrongMap();
				instance.parse(group, json);
				expect(parseMapSpy).toHaveBeenCalledWith(group, expect.anything(), expect.anything());
				expect(parseMapSpy).toHaveBeenCalledTimes(1);
			});

			it('should call parseMap with provided json arg', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
				const json = {a: 'aaaa', b: '130991'};
				const group = new StrongMap();
				instance.parse(group, json);
				expect(parseMapSpy).toHaveBeenCalledWith(expect.anything(), json, expect.anything());
				expect(parseMapSpy).toHaveBeenCalledTimes(1);
			});

			it('should call parseMap with a new state object', () => {
				expect(parseMapSpy).not.toHaveBeenCalled();
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
					groupOne: {
						key_one_one: expectedValue
					}
				};

				const node = new SampleMap();
				instance.parseMap(node, json, state);
				expect(node.groupOne.key_one_one()).toEqual(expectedValue);
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

				const node = new SampleMap();
				node.groupOne.key_one_one(expectedValue1);
				node.groupTwo.key_two_two(expectedValue2);

				node.groupThree.key_three_three(expectedValue3);

				instance.parseMap(node, json, state);

				expect(node.groupOne.key_one_one()).toEqual(expectedValue1);
				expect(node.groupTwo.key_two_two()).toEqual(expectedValue2);
				expect(node.groupThree.key_three_three()).toEqual(expectedValue3);
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

				const node = new SampleMap();
				node.groupOne.key_one_one(expectedValue1_1);
				node.groupOne.key_one_two(expectedValue1_2);
				node.groupOne.key_one_three(expectedValue1_3);

				node.groupTwo.key_two_one(expectedValue2_1);
				node.groupTwo.key_two_two(expectedValue2_2);
				node.groupTwo.key_two_three(expectedValue2_3);

				node.groupThree.key_three_one(expectedValue3_1);
				node.groupThree.key_three_two(expectedValue3_2);
				node.groupThree.key_three_three(expectedValue3_3);

				instance.parseMap(node, json, state);

				expect(node.groupOne.key_one_one()).toEqual(expectedValue1_1);
				expect(node.groupOne.key_one_two()).toEqual(expectedValue1_2);
				expect(node.groupOne.key_one_three()).toEqual(expectedValue1_3);

				expect(node.groupTwo.key_two_one()).toEqual(expectedValue2_1);
				expect(node.groupTwo.key_two_two()).toEqual(expectedValue2_2);
				expect(node.groupTwo.key_two_three()).toEqual(expectedValue2_3);

				expect(node.groupThree.key_three_one()).toEqual(expectedValue3_1);
				expect(node.groupThree.key_three_two()).toEqual(expectedValue3_2);
				expect(node.groupThree.key_three_three()).toEqual(expectedValue3_3);
			});
		});

		describe('parseKey', () => {
			it(`should not throw when keyName arg is missing`, () => {
				expect(() => {
					instance.parseKey(sampleMap, undefined as any, MOCK_VALUE);
				}).not.toThrow();
			});
		});

		describe('parseStrongKey', () => {
			it('should not throw when key arg is missing', () => {
				expect(() => {
					instance.parseStrongKey(undefined as any, MOCK_VALUE, state);
				}).not.toThrow();

				expect(() => {
					instance.parseStrongKey(null as any, MOCK_VALUE, state);
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
					instance.parseStrongKey({} as any, MOCK_VALUE, state);
				}).not.toThrow();
			});
		});
	});
});
