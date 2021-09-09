import {StrongArray, makeArray} from '../../src/types/array';

const MOCK_INITIAL = [5, 'snake', 8];
const MOCK_FALLBACK_DEFAULT = ['dog'];
const MOCK_FALLBACK = [2, -2, 8];

describe('StrongArray', () => {
	describe('Implementation', () => {
		it('should set value to initialValue argument', () => {
			const sampleInitial = ['wolf'];
			const result = makeArray(MOCK_FALLBACK_DEFAULT, sampleInitial);
			expect(result()).toBe(sampleInitial);
		});

		it('should set value when called with an array', () => {
			const initial = ['aa', 'bb', '1491741'];
			const result = makeArray<string>(initial, null);
			const sampleValue: string[] = ['hog'];
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with an empty array', () => {
			const result = makeArray<number>(MOCK_FALLBACK, null);
			const sampleValue: number[] = [];
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback: string[] = ['fox'];
			const result = makeArray<string>(sampleFallback, null);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = [7, 'koala'];
			const result = makeArray(sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a number', () => {
			const sampleFallback = ['bird'];
			const numberedValue = 5 as any;
			const result = makeArray(sampleFallback, null);
			result(numberedValue);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a boolean value', () => {
			const sampleFallback = ['hog'];
			const booleanValue = false as any;
			const result = makeArray(sampleFallback, null);
			result(booleanValue);
			expect(result()).toBe(sampleFallback);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = ['cat', 'dog'];
				const result = makeArray(MOCK_FALLBACK_DEFAULT, null);
				expect(result.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = ['tiger', 5, 'rat'];
				const result = makeArray(MOCK_FALLBACK_DEFAULT, sampleInitial);
				expect(result.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
