import {StrongString, makeString} from '../../src/types/string';

const MOCK_INITIAL = 'hello';
const MOCK_FALLBACK_DEFAULT = 'hello world';
const MOCK_FALLBACK = 'world';

describe('StrongString', () => {
	describe('Implementation', () => {
		it('should set initial value to sampleInitial argument', () => {
			const sampleInitial = 'dog';
			const result = makeString(MOCK_FALLBACK_DEFAULT, sampleInitial);
			expect(result()).toBe(sampleInitial);
		});

		it('should set value when called with a string', () => {
			const result = makeString(MOCK_INITIAL, null);
			const sampleValue = 'pig';
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should set value when called with an empty string', () => {
			const sampleFallback = 'cow';
			const emptyString = '';
			const result = makeString(sampleFallback, null);
			result(emptyString);
			expect(result()).toBe(emptyString);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 'cat';
			const result = makeString(sampleFallback, null);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = 'owl';
			const result = makeString(sampleFallback, undefined);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a number', () => {
			const sampleFallback = 'bird';
			const numberedValue = 5 as any;
			const result = makeString(sampleFallback, null);
			result(numberedValue);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a boolean value', () => {
			const sampleFallback = 'hog';
			const booleanValue = false as any;
			const result = makeString(sampleFallback, null);
			result(booleanValue);
			expect(result()).toBe(sampleFallback);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 'snake';
				const string = makeString(MOCK_FALLBACK_DEFAULT, null);
				expect(string.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = 'bird';
				const string = makeString(MOCK_FALLBACK_DEFAULT, sampleInitial);
				expect(string.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
