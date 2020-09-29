import {TBRule} from '../../src/rule/rule';
import {TBRuleModifiers} from '../../src/rule/modifiers';
import {makeIsNull} from '../../src/validator/is-null';

describe('IsNull', () => {
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
		it('should return true when input is null', () => {
			const rule = new TBRule();
			const value = null;

			const fn = makeIsNull<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is null and mods.invert is true', () => {
			const rule = new TBRule();
			const value = null;
			mods.invert = true;

			const fn = makeIsNull<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is non-null and mods.invert is true', () => {
			const rule = new TBRule();
			const value = 'aaaaaa';
			mods.invert = true;

			const fn = makeIsNull<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const rule = new TBRule();
			const value = 'aaaaaaaaa';

			const fn = makeIsNull<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false)', () => {
			const rule = new TBRule();
			const value = false;

			const fn = makeIsNull<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (true)', () => {
			const rule = new TBRule();
			const value = true;

			const fn = makeIsNull<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const rule = new TBRule();
			const value = 101;

			const fn = makeIsNull<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is an empty array', () => {
			const rule = new TBRule();
			const value = [];

			const fn = makeIsNull<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array', () => {
			const rule = new TBRule();
			const value = ['a', 'b', 'c'];

			const fn = makeIsNull<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
