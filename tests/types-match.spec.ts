import {Rule} from '../src/rule';
import {isType} from '../src/is/type';

describe('types-match', () => {
	it('should be a function', () => {
		expect(typeof isType).toBe('function');
	});

	describe('number validation', () => {
		it('should return true for 0 matching number type', () => {
			expect(isType(0, 'number')).toBe(true);
		});

		it('should return true for 1 matching number type', () => {
			expect(isType(1, 'number')).toBe(true);
		});

		it('should return true for -1 matching number type', () => {
			expect(isType(-1, 'number')).toBe(true);
		});

		it("should return false for '1' matching number type", () => {
			expect(isType('1', 'number')).toBe(false);
		});

		it("should return false for '0' matching number type", () => {
			expect(isType('0', 'number')).toBe(false);
		});
	});

	describe('string validation', () => {
		it('should return true for hello matching string type', () => {
			expect(isType('hello', 'string')).toBe(true);
		});

		it('should return true for empty quotes matching string type', () => {
			expect(isType('', 'string')).toBe(true);
		});

		it('should return true for empty quotes with spaces matching string type', () => {
			expect(isType(' ', 'string')).toBe(true);
		});

		it("should return true for '1' matching string type", () => {
			expect(isType('1', 'string')).toBe(true);
		});

		it("should return true for '0' matching string type", () => {
			expect(isType('0', 'string')).toBe(true);
		});

		it("should return true for '-1' matching string type", () => {
			expect(isType('-1', 'string')).toBe(true);
		});

		it('should return true for number casted to string matching string type', () => {
			const num = 441091;
			const str = num.toString();
			expect(isType(str, 'string')).toBe(true);
		});
	});

	describe('boolean validation', () => {
		it('should return true for true matching boolean type', () => {
			expect(isType(true, 'boolean')).toBe(true);
		});

		it('should return true for false matching boolean type', () => {
			expect(isType(false, 'boolean')).toBe(true);
		});

		it('should return false for 1 matching boolean type', () => {
			expect(isType(1, 'boolean')).toBe(false);
		});

		it('should return false for 0 matching boolean type', () => {
			expect(isType(0, 'boolean')).toBe(false);
		});
	});

	describe('number validation', () => {
		it('should return true for number literal 12', () => {
			expect(isType(12, 'number')).toBe(true);
		});

		it('should return true for number literal 0', () => {
			expect(isType(0, 'number')).toBe(true);
		});

		it('should return true for number literal -10', () => {
			expect(isType(-10, 'number')).toBe(true);
		});

		it('should return true for number literal -15.5', () => {
			expect(isType(-15.5, 'number')).toBe(true);
		});

		it('should return true for literal 22.333', () => {
			expect(isType(23.333, 'number')).toBe(true);
		});
	});

	describe('Rule validation', () => {
		it('should return true for Rule', () => {
			const rule = new Rule();
			expect(isType(rule, Rule)).toBe(true);
		});
	});
});
