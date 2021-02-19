import {StrongHexColorCode, makeHexColorCode} from '../../src/types/hex-color-code';

const MOCK_INITIAL = '#ffffff';
const MOCK_FALLBACK_DEFAULT = 'FF5733';
const MOCK_FALLBACK = '33B5FF';

describe('StrongHexColorCode', () => {
	describe('Implementation', () => {
		it('should set initial value to sampleInitial argument', () => {
			const sampleInitial = '#33FF39';
			const result = makeHexColorCode(sampleInitial, MOCK_FALLBACK_DEFAULT);
			expect(result()).toBe(sampleInitial);
		});

		it('should not set value when called with a string', () => {
			const result = makeHexColorCode(null, MOCK_INITIAL);
			const sampleValue = 'white';
			result(sampleValue);
			expect(result()).toBe(MOCK_INITIAL);
		});

		it('should not set value when called with an empty string', () => {
			const sampleFallback = '33FFFC';
			const emptyString = '';
			const result = makeHexColorCode(null, sampleFallback);
			result(emptyString);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 'FF33A8';
			const result = makeHexColorCode(null, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = '#8D33FF';
			const result = makeHexColorCode(undefined, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a number', () => {
			const sampleFallback = '000000';
			const numberedValue = 5 as any;
			const result = makeHexColorCode(null, sampleFallback);
			result(numberedValue);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a boolean value', () => {
			const sampleFallback = '#FF0000';
			const booleanValue = false as any;
			const result = makeHexColorCode(null, sampleFallback);
			result(booleanValue);
			expect(result()).toBe(sampleFallback);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = '00ECFF';
				const string = makeHexColorCode(null, MOCK_FALLBACK_DEFAULT);
				expect(string.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = 'F0FF00';
				const string = makeHexColorCode(sampleInitial, MOCK_FALLBACK_DEFAULT);
				expect(string.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
