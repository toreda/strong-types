import Big from 'big.js';
import {bigMake} from '../../src/big/make';

describe(`BigMake`, () => {
	it(`should return null when value is null`, () => {
		expect(bigMake(null)).toBeNull();
	});

	it(`should return null when value is undefined`, () => {
		expect(bigMake()).toBeNull();
	});

	it(`should return null when value is truthy, but an invalid type`, () => {
		expect(bigMake([] as any)).toBeNull();
		expect(bigMake({} as any)).toBeNull();
		expect(bigMake('aaaa')).toBeNull();
	});

	it(`should create big for numeric string values`, () => {
		const value = '1491917419';
		expect(bigMake(value)).toStrictEqual(Big(value));
	});

	it(`should create big for numeric string values`, () => {
		const value = '1491917419';
		expect(bigMake(value)).toStrictEqual(Big(value));
	});

	it(`should create big for number values`, () => {
		const value = 45401971;
		expect(bigMake(value)).toStrictEqual(Big(value));
	});

	it(`should return Big when value is a Big`, () => {
		const value = Big(991971);
		expect(bigMake(value)).toStrictEqual(value);
	});
});
