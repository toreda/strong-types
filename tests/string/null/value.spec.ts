import {stringNullValue} from '../../../src/string/null/value';
const EMPTY_STRING = '';

describe('stringNullValue', () => {
	it(`should return fallback when value is undefined`, () => {
		const fallback = 'aaa aa aa';

		expect(stringNullValue(undefined, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is null`, () => {
		const fallback = 'aaa aa aa';

		expect(stringNullValue(null, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is a truthy non-string`, () => {
		const fallback = 'aa9614194';

		expect(stringNullValue(14141, fallback)).toBe(fallback);
	});

	it(`should return value when value arg is an empty string`, () => {
		const fallback = 'aaadf197149714';

		expect(stringNullValue(EMPTY_STRING, fallback)).toBe(EMPTY_STRING);
	});

	it(`should return value when value arg is a non-empty string`, () => {
		const fallback = 'aa971459719714';
		const value = 'aa9a7197419741';
		expect(stringNullValue(value, fallback)).toBe(value);
	});

	it(`should return null when value is not a string and fallback is intentionally null`, () => {
		const fallback = null;
		expect(stringNullValue(1414411971 as any, fallback)).toBeNull();
	});
});
