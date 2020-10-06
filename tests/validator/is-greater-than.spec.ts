import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsGreaterThan} from '../../src/validator/is-greater-than';

const MOCK_TARGET = 44410;
const MOCK_CURR = 1111;

describe('IsGreaterThan', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	beforeEach(() => {
		mods.invert = false;
	});

	describe('make', () => {
		it('should return a function', () => {});
	});

	describe('usage', () => {
		it('should return false when curr value argument is not a number', () => {
			const rule = new STRule();
			const stringCurr = 'aaaa';

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(MOCK_TARGET);
			expect(rule.nodes[0].execute(stringCurr as any)).toBe(false);
		});

		it('should return false when target value is not a number', () => {
			const rule = new STRule();
			const stringTarget = 'ffffffff';

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(stringTarget as any);
			expect(rule.nodes[0].execute(MOCK_CURR)).toBe(false);
		});

		it('should return false when both current and target arguments are 0', () => {
			const rule = new STRule();
			const curr = 0;
			const target = 0;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return true when both current and target arguments are 0 but invert flag is set', () => {
			const rule = new STRule();
			const curr = 0;
			const target = 0;
			mods.invert = true;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return false when current is less than target', () => {
			const rule = new STRule();
			const curr = 13;
			const target = 55;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return true when current is less than target but invert flag is set', () => {
			const rule = new STRule();
			const curr = 13;
			const target = 55;
			mods.invert = true;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive integer current is greater than positive integer target', () => {
			const rule = new STRule();
			const curr = 25;
			const target = 10;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive integer current is greater than negative integer target', () => {
			const rule = new STRule();
			const curr = 25;
			const target = -10;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when negative integer current is greater than negative integer target', () => {
			const rule = new STRule();
			const curr = -2;
			const target = -10;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive float current is greater than negative integer target', () => {
			const rule = new STRule();
			const curr = 2.223;
			const target = -10;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when negative float current is greater than negative integer target', () => {
			const rule = new STRule();
			const curr = -3.3;
			const target = -10;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive integer current is greater than negative integer target', () => {
			const rule = new STRule();
			const curr = 25;
			const target = -10;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive float current is greater than negative float target', () => {
			const rule = new STRule();
			const curr = 4.4422;
			const target = -5.2111;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when negative float current is greater than negative float target', () => {
			const rule = new STRule();
			const curr = -7.11;
			const target = -11.5557;

			const fn = makeIsGreaterThan<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});
	});
});
