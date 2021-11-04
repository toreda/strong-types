import {arrayValue} from '../../src/array/value';

describe('arrayValue', () => {
	it(`should return fallback when value is undefined`, () => {
		const fallback: string[] = [];

		expect(arrayValue(undefined, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is null`, () => {
		const fallback: string[] = [];

		expect(arrayValue(null, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is a non-array`, () => {
		const fallback: string[] = [];

		expect(arrayValue('one-4441', fallback)).toBe(fallback);
	});

	it(`should return value when value arg is an empty array`, () => {
		const fallback: string[] = ['aa', 'bb'];
		const value: string[] = [];
		expect(arrayValue(value, fallback)).toBe(value);
	});

	it(`should return value when value arg is a non-empty array`, () => {
		const fallback: string[] = [];
		const value: string[] = ['aa', 'bb'];
		expect(arrayValue(value, fallback)).toBe(value);
	});
});
