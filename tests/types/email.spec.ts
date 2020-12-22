import {StrongEmail, makeEmail} from '../../src/types/email';

const MOCK_INITIAL = 'test@test.com';
const MOCK_FALLBACK_DEFAULT = 'dog@cat.com';
const MOCK_FALLBACK = 'toy@undertree,com';

describe('StrongEmail', () => {
	describe('Implementation', () => {
		it('should set initial value to sampleInitial argument', () => {
			const sampleInitial = 'fall@leaves.com';
			const result = makeEmail(sampleInitial, MOCK_FALLBACK_DEFAULT);
			expect(result()).toBe(sampleInitial);
		});

		it('should not set value when called with a string', () => {
			const result = makeEmail(null, MOCK_INITIAL);
			const sampleValue = 'test .com';
			result(sampleValue);
			expect(result()).toBe(MOCK_INITIAL);
		});

		it('should not set value when called with an empty string', () => {
			const sampleFallback = 'bird@seed.com';
			const emptyString = '';
			const result = makeEmail(null, sampleFallback);
			result(emptyString);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 'game@boy.com';
			const result = makeEmail(null, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = 'horde@thebest.com';
			const result = makeEmail(undefined, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a number', () => {
			const sampleFallback = 'paw@print.com';
			const numberedValue = 5 as any;
			const result = makeEmail(null, sampleFallback);
			result(numberedValue);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a boolean value', () => {
			const sampleFallback = 'link@zelda.com';
			const booleanValue = false as any;
			const result = makeEmail(null, sampleFallback);
			result(booleanValue);
			expect(result()).toBe(sampleFallback);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 'mr@grinch.com';
				const string = makeEmail(null, MOCK_FALLBACK_DEFAULT);
				expect(string.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = 'mean@one.com';
				const string = makeEmail(sampleInitial, MOCK_FALLBACK_DEFAULT);
				expect(string.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});

