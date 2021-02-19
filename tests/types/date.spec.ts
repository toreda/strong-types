import {StrongDate, makeDate} from '../../src/types/date';

const MOCK_INITIAL = '2020';
const MOCK_FALLBACK_DEFAULT = '1886-08';
const MOCK_FALLBACK = '1999-10-31';

describe('StrongDate', () => {
	describe('Implementation', () => {
		it('should set initial value to sampleInitial argument', () => {
			const sampleInitial = '2020-12-25';
			const result = makeDate(sampleInitial, MOCK_FALLBACK_DEFAULT);
			expect(result()).toBe(sampleInitial);
		});

		it('should not set value when called with a string', () => {
			const result = makeDate(null, MOCK_INITIAL);
			const sampleValue = 'Feb 5th';
			result(sampleValue);
			expect(result()).toBe(MOCK_INITIAL);
		});

		it('should not set value when called with an empty string', () => {
			const sampleFallback = '2020';
			const emptyString = '';
			const result = makeDate(null, sampleFallback);
			result(emptyString);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = '1998';
			const result = makeDate(null, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = '1534-08';
			const result = makeDate(undefined, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a number', () => {
			const sampleFallback = '2020-12';
			const numberedValue = 5 as any;
			const result = makeDate(null, sampleFallback);
			result(numberedValue);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a boolean value', () => {
			const sampleFallback = '2015';
			const booleanValue = false as any;
			const result = makeDate(null, sampleFallback);
			result(booleanValue);
			expect(result()).toBe(sampleFallback);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = '1998-04-16';
				const string = makeDate(null, MOCK_FALLBACK_DEFAULT);
				expect(string.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = '2005-06';
				const string = makeDate(sampleInitial, MOCK_FALLBACK_DEFAULT);
				expect(string.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
