import {makeEmail} from '../../src/email';

const MOCK_FALLBACK_DEFAULT = 'dog@cat.com';
const MOCK_FALLBACK = 'toy@undertree,com';
const MOCK_INITIAL = 'test@test.com';

describe('Email', () => {
	describe('Implementation', () => {
		it('should set initial value to sampleInitial argument', () => {
			const sampleInitial = 'fall@leaves.com';
			const result = makeEmail(MOCK_FALLBACK_DEFAULT, sampleInitial);
			expect(result()).toBe(sampleInitial);
		});

		it('should not set value when called with a string', () => {
			const result = makeEmail(MOCK_INITIAL, null);
			const sampleValue = 'test .com';
			result(sampleValue);
			expect(result()).toBe(MOCK_INITIAL);
		});

		it('should not set value when called with an empty string', () => {
			const sampleFallback = 'bird@seed.com';
			const emptyString = '';
			const result = makeEmail(sampleFallback, null);
			result(emptyString);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 'game@boy.com';
			const result = makeEmail(sampleFallback, null);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = 'horde@thebest.com';
			const result = makeEmail(sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a number', () => {
			const sampleFallback = 'paw@print.com';
			const numberedValue = 5 as any;
			const result = makeEmail(sampleFallback, null);
			result(numberedValue);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a boolean value', () => {
			const sampleFallback = 'link@zelda.com';
			const booleanValue = false as any;
			const result = makeEmail(sampleFallback, null);
			result(booleanValue);
			expect(result()).toBe(sampleFallback);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 'mr@grinch.com';
				const string = makeEmail(MOCK_FALLBACK_DEFAULT, null);
				expect(string.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = 'mean@one.com';
				const string = makeEmail(MOCK_FALLBACK_DEFAULT, sampleInitial);
				expect(string.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
