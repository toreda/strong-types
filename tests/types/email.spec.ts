import {StrongEmail, makeEmail} from '../../src/types/email';

const MOCK_INITIAL = 'cat@meow.com';
const MOCK_FALLBACK_DEFAULT = 'dog@woof.com';
const MOCK_FALLBACK = 'cow@moo.com';

describe('StrongEmail', () => {
	describe('Implementation', () => {
		it('should set initial value to sampleInitial argument', () => {
			const sampleInitial = 'test@test.com';
			const result = makeEmail(sampleInitial, MOCK_FALLBACK_DEFAULT);
			expect(result()).toBe(sampleInitial);
		});

		it('should return fallback default when called with a string', () => {
			const result = makeEmail(null, MOCK_INITIAL);
			const sampleValue = 'pig';
			result(sampleValue);
			expect(result()).toBe(MOCK_FALLBACK);
		});

		it('should return fallback default when called with an empty string', () => {
			const sampleFallback = 'test@test.com';
			const emptyString = '';
			const result = makeEmail(null, sampleFallback);
			result(emptyString);
			expect(result()).toBe(emptyString);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 'test@test.com';
			const result = makeEmail(null, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = 'test@test.com';
			const result = makeEmail(undefined, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a number', () => {
			const sampleFallback = 'test@test.com';
			const numberedValue = 5 as any;
			const result = makeEmail(null, sampleFallback);
			result(numberedValue);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a boolean value', () => {
			const sampleFallback = 'test@test.com';
			const booleanValue = false as any;
			const result = makeEmail(null, sampleFallback);
			result(booleanValue);
			expect(result()).toBe(sampleFallback);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 'test@test.com';
				const string = makeEmail(null, MOCK_FALLBACK_DEFAULT);
				expect(string.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = 'test@test.com';
				const string = makeEmail(sampleInitial, MOCK_FALLBACK_DEFAULT);
				expect(string.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
