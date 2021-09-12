import {Bool, makeBoolean} from '../../src/bool';

const MOCK_INITIAL = true;
const MOCK_FALLBACK_DEFAULT = false;

describe('Bool', () => {
	describe('Implementation', () => {
		it('should set value to initialValue argument', () => {
			const sampleInitial = false;
			const result = makeBoolean(MOCK_FALLBACK_DEFAULT, sampleInitial);
			expect(result()).toBe(sampleInitial);
		});

		it('should set value when called with a boolean', () => {
			const result = makeBoolean(MOCK_INITIAL, null);
			const sampleValue = false;
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = true;
			const result = makeBoolean(sampleFallback, null);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = false;
			const result = makeBoolean(sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a number', () => {
			const sampleFallback = true;
			const numberedValue = 5 as any;
			const result = makeBoolean(sampleFallback, null);
			result(numberedValue);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with an array', () => {
			const sampleFallback = false;
			const arrayValue = ['hello'] as any;
			const result = makeBoolean(sampleFallback, null);
			result(arrayValue);
			expect(result()).toBe(sampleFallback);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = true;
				const result = makeBoolean(MOCK_FALLBACK_DEFAULT, null);
				expect(result.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = false;
				const result = makeBoolean(MOCK_INITIAL, sampleInitial);
				expect(result.get(MOCK_INITIAL)).toBe(sampleInitial);
			});
		});
	});
});
