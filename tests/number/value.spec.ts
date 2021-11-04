import {numberValue} from '../../src/number/value';

describe('numberValue', () => {
	it(`should return fallback when value is undefined`, () => {
		const fallback = 14141;

		expect(numberValue(undefined, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is null`, () => {
		const fallback = 1114;

		expect(numberValue(null, fallback)).toBe(fallback);
	});

	it(`should return fallback when value is a non-number`, () => {
		const fallback = 41081;

		expect(numberValue('one-14901741', fallback)).toBe(fallback);
	});

	it(`should return value when value arg is a positive number`, () => {
		const fallback = 1187187;
		const value = 33108;
		expect(numberValue(value, fallback)).toBe(value);
	});

	it(`should return value when value arg is a 0`, () => {
		const fallback = 1187187;
		const value = 0;
		expect(numberValue(value, fallback)).toBe(value);
	});

	it(`should return value when value arg is a negative number`, () => {
		const fallback = 1187187;
		const value = -140898;
		expect(numberValue(value, fallback)).toBe(value);
	});
});
