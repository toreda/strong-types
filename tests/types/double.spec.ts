import {StrongDouble, makeDouble} from '../../src/types/double';

const MOCK_INITIAL = 5246576;
const MOCK_FALLBACK_DEFAULT = 6.5;
const MOCK_FALLBACK = -9.596596;

describe('StrongDouble', () => {
	describe('Implementation', () => {
		it('should set value to initialValue argument', () => {
			const sampleInitial = 5.785216;
			const result = makeDouble(sampleInitial, MOCK_FALLBACK_DEFAULT);
			expect(result()).toBe(sampleInitial);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 999981;
			const result = makeDouble(null, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = 5.664546634;
			const result = makeDouble(undefined, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should set value when called with non-null value', () => {
			const sampleValue = 14.81;
			const result = makeDouble(null, MOCK_INITIAL);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a negative value', () => {
			const sampleValue = -15.25845566;
			const result = makeDouble(null, MOCK_FALLBACK);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a negative decimal value', () => {
			const sampleValue = -1.855555551;
			const result = makeDouble(null, MOCK_FALLBACK_DEFAULT);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a positive value', () => {
			const sampleValue = 85646466526;
			const result = makeDouble(null, MOCK_INITIAL);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a positive decimal value', () => {
			const sampleValue = 7.454561616;
			const result = makeDouble(null, MOCK_FALLBACK_DEFAULT);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should not set value when called with an array', () => {
			const sampleFallbackDefault = 3900001;
			const arrayFallback = ['cat'] as any;
			const result = makeDouble(null, sampleFallbackDefault);
			result(arrayFallback);
			expect(result()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a boolean', () => {
			const sampleFallbackDefault = -4512.25565;
			const booleanFallback = false as any;
			const result = makeDouble(null, sampleFallbackDefault);
			result(booleanFallback);
			expect(result()).toBe(sampleFallbackDefault);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 8810992;
				const result = makeDouble(null, MOCK_FALLBACK_DEFAULT);
				expect(result.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = -31.01;

				const result = makeDouble(sampleInitial, MOCK_FALLBACK_DEFAULT);
				expect(result.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
