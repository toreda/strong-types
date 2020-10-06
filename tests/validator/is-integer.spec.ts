import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsInteger} from '../../src/validator/is-integer';

describe('Integer', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	beforeEach(() => {
		mods.invert = false;
	});

	describe('makeIsInteger', () => {
		it('should return a function', () => {
			const rule = new STRule();

			const fn = makeIsInteger<STRule>(rule, rule, mods);
			expect(typeof fn).toBe('function');
		});
	});

	describe('Usage', () => {
		it('should return false when curr value is a string', () => {
			const rule = new STRule();

			const fn = makeIsInteger<STRule>(rule, rule, mods);
			fn();

			const str = '111111111';
			expect(rule.nodes[0].execute(str)).toBe(false);
		});

		it('should return false when curr a positive float', () => {
			const rule = new STRule();
			const floatCurr = 1.333;

			const fn = makeIsInteger<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return false when curr a negative float', () => {
			const rule = new STRule();
			const floatCurr = -7.333;

			const fn = makeIsInteger<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return true when curr a negative float but invert flag is set', () => {
			const rule = new STRule();
			const floatCurr = -7.333;
			mods.invert = true;

			const fn = makeIsInteger<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(floatCurr)).toBe(true);
		});

		it('should return true when curr a positive integer', () => {
			const rule = new STRule();
			const intCurr = 7;

			const fn = makeIsInteger<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(intCurr)).toBe(true);
		});

		it('should return true when curr a negative integer', () => {
			const rule = new STRule();
			const intCurr = -43;

			const fn = makeIsInteger<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(intCurr)).toBe(true);
		});

		it('should return false when curr is a boolean, true (non-number)', () => {
			const rule = new STRule();
			const curr = true;

			const fn = makeIsInteger<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is a boolean, false (non-number)', () => {
			const rule = new STRule();
			const curr = false;

			const fn = makeIsInteger<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is an empty array (non-number)', () => {
			const rule = new STRule();
			const curr = [];

			const fn = makeIsInteger<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});
