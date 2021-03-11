import {StrongUrl, makeUrl} from '../../src/types/url';

const MOCK_FALLBACK_DEFAULT = 'Http://somedomain.com';
const MOCK_FALLBACK = 'Wss://somedomain.com:8080';
const MOCK_INITIAL = 'http://test.com';

describe('StrongUrl', () => {
	describe('Implementation', () => {
		it('should set initial value to sampleInitial argument', () => {
			const sampleInitial = 'http://dog.com';
			const result = makeUrl(MOCK_FALLBACK_DEFAULT, sampleInitial);
			expect(result()).toBe(sampleInitial);
		});

		it('should not set value when called with a string', () => {
			const result = makeUrl(MOCK_INITIAL, null);
			const sampleValue = 'test .com';
			result(sampleValue);
			expect(result()).toBe(MOCK_INITIAL);
		});

		it('should not set value when called with an empty string', () => {
			const sampleFallback = 'Wss://test.com:3030';
			const emptyString = '';
			const result = makeUrl(sampleFallback, null);
			result(emptyString);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 'HTTPS://somedomain.com:888';
			const result = makeUrl(sampleFallback, null);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = 'https://thebest.com';
			const result = makeUrl(sampleFallback, undefined);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a number', () => {
			const sampleFallback = 'Wss://cat.com';
			const numberedValue = 5 as any;
			const result = makeUrl(sampleFallback, null);
			result(numberedValue);
			expect(result()).toBe(sampleFallback);
		});

		it('should not set value when called with a boolean value', () => {
			const sampleFallback = 'HTTP://dog.com';
			const booleanValue = false as any;
			const result = makeUrl(sampleFallback, null);
			result(booleanValue);
			expect(result()).toBe(sampleFallback);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 'https://grinch.com';
				const string = makeUrl(MOCK_FALLBACK_DEFAULT, null);
				expect(string.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = 'http://test.com';
				const string = makeUrl(MOCK_FALLBACK_DEFAULT, sampleInitial);
				expect(string.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
