import {stringValue} from '../../src/string/value';
const EMPTY_STRING = '';

describe('stringValue', () => {
	it(`should return fallback when value is undefined`, () => {
		const fallback = 'aaa aa aa';

		expect(stringValue(undefined, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is null`, () => {
		const fallback = 'aaa aa aa';

		expect(stringValue(null, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is a truthy non-string`, () => {
		const fallback = 'aa9614194';

		expect(stringValue(14141, fallback)).toBe(fallback);
	});

	it(`should return value when value arg is an empty string`, () => {
		const fallback = 'aaadf197149714';

		expect(stringValue(EMPTY_STRING, fallback)).toBe(EMPTY_STRING);
	});

	it(`should return value when value arg is a non-empty string`, () => {
		const fallback = 'aa971459719714';
		const value = 'aa9a7197419741';
		expect(stringValue(value, fallback)).toBe(value);
	});
});
