import {StrongInt, makeInt} from '../../src/types/int';

const MOCK_INITIAL = 524;
const MOCK_FALLBACK_DEFAULT = 65;
const MOCK_FALLBACK = -9596;

describe('StrongInt', () => {
	describe('Implementation', () => {
		it('should set value to initialValue argument', () => {
			const sampleInitial = 578;
			const result = makeInt(sampleInitial, MOCK_FALLBACK_DEFAULT);
			expect(result()).toBe(sampleInitial);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 999981;
			const result = makeInt(null, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});
		it('should return fallback default when value is undefined', () => {
			const sampleFallback = -54546;
			const result = makeInt(undefined, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should set value when called with non-null value', () => {
			const sampleValue = 1481;
			const result = makeInt(null, MOCK_INITIAL);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a negative value', () => {
			const sampleValue = -15;
			const result = makeInt(null, MOCK_FALLBACK);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a 0 value', () => {
			const sampleValue = 0;
			const result = makeInt(null, MOCK_FALLBACK);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with a positive value', () => {
			const sampleValue = 85646466526;
			const result = makeInt(null, MOCK_INITIAL);
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should not set value when called with a negative decimal value', () => {
			const sampleFallbackDefault = 39;
			const negativeFloat = -25.62;
			const result = makeInt(null, sampleFallbackDefault);
			result(negativeFloat);
			expect(result()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a positive decimal value', () => {
			const sampleFallbackDefault = 24;
			const positiveFloat = 15.08;
			const result = makeInt(null, sampleFallbackDefault);
			result(positiveFloat);
			expect(result()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with an array', () => {
			const sampleFallbackDefault = 3001;
			const arrayValue = [-5464] as any;
			const result = makeInt(null, sampleFallbackDefault);
			result(arrayValue);
			expect(result()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a boolean', () => {
			const sampleFallbackDefault = -565;
			const booleanValue = false as any;
			const result = makeInt(null, sampleFallbackDefault);
			result(booleanValue);
			expect(result()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a string', () => {
			const sampleFallbackDefault = 51;
			const stringValue = 'pets' as any;
			const result = makeInt(null, sampleFallbackDefault);
			result(stringValue);
			expect(result()).toBe(sampleFallbackDefault);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 892;
				const result = makeInt(null, MOCK_INITIAL);
				expect(result.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = -311;
				const result = makeInt(sampleInitial, MOCK_FALLBACK_DEFAULT);
				expect(result.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
