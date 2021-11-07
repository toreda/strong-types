import {arrayNullValue} from '../../../src/array/null/value';

describe('arrayNullValue', () => {
	it(`should return fallback when value is undefined`, () => {
		const fallback: string[] = [];

		expect(arrayNullValue(undefined, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is null`, () => {
		const fallback: string[] = [];

		expect(arrayNullValue(null, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is a non-array`, () => {
		const fallback: string[] = [];

		expect(arrayNullValue('one-4441', fallback)).toBe(fallback);
	});

	it(`should return value when value arg is an empty array`, () => {
		const fallback: string[] = ['aa', 'bb'];
		const value: string[] = [];
		expect(arrayNullValue(value, fallback)).toBe(value);
	});

	it(`should return value when value arg is a non-empty array`, () => {
		const fallback: string[] = [];
		const value: string[] = ['aa', 'bb'];
		expect(arrayNullValue(value, fallback)).toBe(value);
	});

	it(`should return null when value is not an array and fallback is intentionally null`, () => {
		const fallback = null;
		expect(arrayNullValue('9174194719741' as any, fallback)).toBeNull();
	});
});
