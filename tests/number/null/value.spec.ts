import {numberNullValue} from '../../../src/number/null/value';

describe('numberNullValue', () => {
	it(`should return fallback when value is undefined`, () => {
		const fallback = 14141;

		expect(numberNullValue(undefined, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is null`, () => {
		const fallback = 1114;

		expect(numberNullValue(null, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is a non-number`, () => {
		const fallback = 41081;

		expect(numberNullValue('one-14901741', fallback)).toBe(fallback);
	});

	it(`should return value when value arg is a positive number`, () => {
		const fallback = 1187187;
		const value = 33108;
		expect(numberNullValue(value, fallback)).toBe(value);
	});

	it(`should return value when value arg is a 0`, () => {
		const fallback = 1187187;
		const value = 0;
		expect(numberNullValue(value, fallback)).toBe(value);
	});

	it(`should return value when value arg is a negative number`, () => {
		const fallback = 1187187;
		const value = -140898;
		expect(numberNullValue(value, fallback)).toBe(value);
	});

	it(`should return null when value is not a number and fallback is intentionally null`, () => {
		const fallback = null;
		expect(numberNullValue('1110814108410814' as any, fallback)).toBeNull();
	});
});
