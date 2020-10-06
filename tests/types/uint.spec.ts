import {StrongUInt, makeUInt, makeUIntNull} from '../../src/types/uint';

const MOCK_INITIAL = 4410;
const MOCK_FALLBACK_DEFAULT = 99121;
const MOCK_FALLBACK = 172091;

describe('StrongUInt', () => {
	describe('Implementation', () => {
		it('should set value to initialValue argument', () => {
			const sampleInitial = 11098;
			const uint = makeUInt(sampleInitial, MOCK_FALLBACK_DEFAULT);
			expect(uint()).toBe(sampleInitial);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 999981;
			const uint = makeUInt(null, sampleFallback);
			expect(uint()).toBe(sampleFallback);
		});

		it('should set value when called with non-null value', () => {
			const uint = makeUInt(null, MOCK_FALLBACK_DEFAULT);
			const sampleValue = 140781;
			uint(sampleValue);
			expect(uint()).toBe(sampleValue);
		});

		it('should not set value when called with a negative value', () => {
			const sampleFallbackDefault = 37192;
			const negativeInt = -14409;
			const uint = makeUInt(null, sampleFallbackDefault);
			uint(negativeInt);
			expect(uint()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a negative decimal value', () => {
			const sampleFallbackDefault = 333221;
			const negativeFloat = -55.3;
			const uint = makeUInt(null, sampleFallbackDefault);
			uint(negativeFloat);
			expect(uint()).toBe(sampleFallbackDefault);
		});

		it('should not set value when called with a positive decimal value', () => {
			const sampleFallbackDefault = 3900001;
			const positiveFloat = 22.333;
			const uint = makeUInt(null, sampleFallbackDefault);
			uint(positiveFloat);
			expect(uint()).toBe(sampleFallbackDefault);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 8810992;
				const uint = makeUInt(null, MOCK_FALLBACK_DEFAULT);
				expect(uint.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = 3101;

				const uint = makeUInt(sampleInitial, MOCK_FALLBACK_DEFAULT);
				expect(uint.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});

describe('StrongUIntNull', () => {
	describe('Implementation', () => {
		it('should return null when value is not set', () => {
			const sampleFallbackDefault = 3900001;
			const uint = makeUIntNull(null, sampleFallbackDefault);
			expect(uint()).toBeNull();
		});

		it('should return null after value has been set to null', () => {
			const sampleFallbackDefault = 4141029;
			const sampleInt = 223211;
			const uint = makeUIntNull(sampleInt, sampleFallbackDefault);
			uint(null);
			expect(uint()).toBeNull();
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback when no value is set', () => {
				const sampleFallbackDefault = 11122;
				const uint = makeUIntNull(null, sampleFallbackDefault);
				expect(uint.get(sampleFallbackDefault)).toBe(sampleFallbackDefault);
			});

			it('should return fallback after previous value is overwritten with null', () => {
				const sampleFallbackDefault = 299281;
				const sampleInit = 444180;
				const uint = makeUIntNull(sampleInit, sampleFallbackDefault);
				uint(null);
				expect(uint.get(3333)).toBe(sampleFallbackDefault);
			});
		});
	});
});
