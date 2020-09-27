import {typesMatch} from '../src/types-match';

describe('types-match', () => {
	it('should be a function', () => {
		expect(typeof typesMatch).toBe('function');
	});

	describe('number validation', () => {
		it('should return true for 0 matching number type', () => {
			expect(typesMatch(0, 'number')).toBe(true);
		});

		it('should return true for 1 matching number type', () => {
			expect(typesMatch(1, 'number')).toBe(true);
		});

		it('should return true for -1 matching number type', () => {
			expect(typesMatch(-1, 'number')).toBe(true);
		});

		it("should return false for '1' matching number type", () => {
			expect(typesMatch('1', 'number')).toBe(false);
		});

		it("should return false for '0' matching number type", () => {
			expect(typesMatch('0', 'number')).toBe(false);
		});
	});

	describe('string validation', () => {
		it('should return true for hello matching string type', () => {
			expect(typesMatch('hello', 'string')).toBe(true);
		});

		it('should return true for empty quotes matching string type', () => {
			expect(typesMatch('', 'string')).toBe(true);
		});

		it('should return true for empty quotes with spaces matching string type', () => {
			expect(typesMatch(' ', 'string')).toBe(true);
		});

		it("should return true for '1' matching string type", () => {
			expect(typesMatch('1', 'string')).toBe(true);
		});

		it("should return true for '0' matching string type", () => {
			expect(typesMatch('0', 'string')).toBe(true);
		});

		it("should return true for '-1' matching string type", () => {
			expect(typesMatch('-1', 'string')).toBe(true);
		});

		it('should return true for number casted to string matching string type', () => {
			const num = 441091;
			const str = num.toString();
			expect(typesMatch(str, 'string')).toBe(true);
		});
	});

	describe('boolean validation', () => {
		it('should return true for true matching boolean type', () => {
			expect(typesMatch(true, 'boolean')).toBe(true);
		});

		it('should return true for false matching boolean type', () => {
			expect(typesMatch(false, 'boolean')).toBe(true);
		});

		it('should return false for 1 matching boolean type', () => {
			expect(typesMatch(1, 'boolean')).toBe(false);
		});

		it('should return false for 0 matching boolean type', () => {
			expect(typesMatch(0, 'boolean')).toBe(false);
		});
	});
});
