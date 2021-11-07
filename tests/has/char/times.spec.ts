import {hasCharTimes} from '../../../src/has/char/times';

const MOCK_TEXT1 = 'a1947194714';
const MOCK_CHAR1 = 'a';
const EMPTY_STRING = '';

describe('hasCharTimes', () => {
	it(`should return false when text arg is undefined`, () => {
		expect(hasCharTimes(undefined as any, MOCK_CHAR1, 1)).toBe(false);
	});

	it(`should return false when text arg is null`, () => {
		expect(hasCharTimes(null as any, MOCK_CHAR1, 1)).toBe(false);
	});

	it(`should return false when text arg is a truthy non-string`, () => {
		expect(hasCharTimes(44410 as any, MOCK_CHAR1, 1)).toBe(false);
	});


	it(`should return false when char arg is null`, () => {
		expect(hasCharTimes(MOCK_TEXT1, null as any, 1)).toBe(false);
	});

	it(`should return false when char arg is undefined`, () => {
		expect(hasCharTimes(MOCK_TEXT1, undefined as any, 1)).toBe(false);
	});

	it(`should return false when char arg is a truthy non-string`, () => {
		expect(hasCharTimes(MOCK_TEXT1, 4141 as any, 1)).toBe(false);
	});


	it(`should return false when char arg is an empty string`, () => {
		expect(hasCharTimes(MOCK_TEXT1, EMPTY_STRING, 1)).toBe(false);
	});

	it(`should return false when text arg is an empty string`, () => {
		expect(hasCharTimes(EMPTY_STRING, MOCK_CHAR1, 1)).toBe(false);
	});

	it(`should return false when count arg is a negative number`, () => {
		expect(hasCharTimes('aaaa', 'a', -1)).toBe(false);
	});

	it(`should return false when char arg has more than 1 char`, () => {
		expect(hasCharTimes(MOCK_TEXT1, 'aaa', 1)).toBe(false);
	});

	it(`should return true when count arg is a 0 and target char does not occur in text`, () => {
		expect(hasCharTimes('bbbbbbb', 'a', 0)).toBe(true);
	});

	it(`should return true when count is 1 and there is exactly 1 match`, () => {
		expect(hasCharTimes('cddddddd', 'c', 1)).toBe(true);
	});

	it(`should return true when count has exactly occurences as specified`, () => {
		expect(hasCharTimes('ccccdddd', 'c', 4)).toBe(true);
	});
});
