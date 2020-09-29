import {TBOpIsEmpty, createIsEmpty} from '../../src/validator/empty';

import {TBRule} from '../../src/rule/rule';
import {TBRuleModifiers} from '../../src/rule/modifiers';

describe('empty', () => {
	let mods: TBRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	beforeEach(() => {
		mods.invert = false;
	});

	describe('Usage', () => {
		it('should return true when input is a non-empty string and mods.invert is true', () => {
			const rule = new TBRule();
			const value = 'aaaaaaaaa';
			mods.invert = true;
			const fn = createIsEmpty<TBRule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is an empty array and mods.invert is true', () => {
			const rule = new TBRule();
			const value = [];
			mods.invert = true;
			const fn = createIsEmpty<TBRule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty string', () => {
			const rule = new TBRule();
			const value = 'aaaaaaaaa';

			const fn = createIsEmpty<TBRule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false)', () => {
			const rule = new TBRule();
			const value = false;

			const fn = createIsEmpty<TBRule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (true)', () => {
			const rule = new TBRule();
			const value = true;

			const fn = createIsEmpty<TBRule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const rule = new TBRule();
			const value = 101;

			const fn = createIsEmpty<TBRule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is an empty array', () => {
			const rule = new TBRule();
			const value = [];

			const fn = createIsEmpty<TBRule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty arrya', () => {
			const rule = new TBRule();
			const value = ['a', 'b', 'c'];

			const fn = createIsEmpty<TBRule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
