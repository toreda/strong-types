import {StrongString, makeString} from '../../src/types/string';

import {isType} from '../../src/validator/is-type';

const MOCK_INITIAL = 'hello';
const MOCK_FALLBACK_DEFAULT = 'hello world';
const MOCK_FALLBACK = 'world';
const EMPTY_STRING = '';

describe('StrongString', () => {
	describe('Implementation', () => {
		it('should set initial value to sampleInitial argument', () => {
			const sampleInitial = 'dog';
			const result = makeString(sampleInitial, MOCK_FALLBACK_DEFAULT);
			expect(result()).toBe(sampleInitial);
		});

		it('should return fallback default when value is null', () => {
			const sampleFallback = 'cat';
			const result = makeString(null, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should set value when called with non-null value', () => {
			const result = makeString(null, MOCK_INITIAL);
			const sampleValue = 'pig';
			result(sampleValue);
			expect(result()).toBe(sampleValue);
		});

		it('should return fallback default when value is undefined', () => {
			const sampleFallback = 'owl';
			const result = makeString(undefined, sampleFallback);
			expect(result()).toBe(sampleFallback);
		});

		it('should return fallback default when value is an empty string', () => {
			const sampleFallback = 'cow';
			const result = makeString(EMPTY_STRING, sampleFallback);
			expect(result()).toBe(EMPTY_STRING);
		});
	});

	describe('Methods', () => {
		describe('get', () => {
			it('should return fallback argument when value is null', () => {
				const sampleFallback = 'snake';
				const string = makeString(null, MOCK_FALLBACK_DEFAULT);
				expect(string.get(sampleFallback)).toBe(sampleFallback);
			});

			it('should return value when value is set', () => {
				const sampleInitial = 'bird';
				const string = makeString(sampleInitial, MOCK_FALLBACK_DEFAULT);
				expect(string.get(MOCK_FALLBACK)).toBe(sampleInitial);
			});
		});
	});
});
