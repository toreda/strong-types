import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsBoolean} from '../../src/validator/is-boolean';

describe('STBoolean', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	beforeEach(() => {
		mods.invert = false;
	});

	describe('Usage', () => {
		it('should return false when input is a non-empty string and mods.invert is false', () => {
			const rule = new STRule();
			const value = 'aaaaaaaaa';
			mods.invert = false;
			const fn = makeIsBoolean<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is an empty array and mods.invert is true', () => {
			const rule = new STRule();
			const value = [];
			mods.invert = true;
			const fn = makeIsBoolean<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const rule = new STRule();
			const value = 'aaaaaaaaa';

			const fn = makeIsBoolean<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (false)', () => {
			const rule = new STRule();
			const value = false;

			const fn = makeIsBoolean<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a boolean (false) and invert flag is active', () => {
			const rule = new STRule();
			const value = false;
			mods.invert = true;

			const fn = makeIsBoolean<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (true)', () => {
			const rule = new STRule();
			const value = true;

			const fn = makeIsBoolean<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a boolean (true)', () => {
			const rule = new STRule();
			const value = true;
			mods.invert = true;

			const fn = makeIsBoolean<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const rule = new STRule();
			const value = 101;

			const fn = makeIsBoolean<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is an empty array', () => {
			const rule = new STRule();
			const value = [];

			const fn = makeIsBoolean<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array', () => {
			const rule = new STRule();
			const value = ['a', 'b', 'c'];

			const fn = makeIsBoolean<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
