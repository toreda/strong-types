import {TBRule} from '../../src/rule/rule';
import {TBRuleModifiers} from '../../src/rule/modifiers';
import {makeIsUndefined} from '../../src/validator/is-undefined';

describe('IsUndefined', () => {
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
		it('should return true when value argument is undefined', () => {
			const rule = new TBRule();
			const val = undefined;

			const fn = makeIsUndefined<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(true);
		});

		it('should return false when value argument is a string', () => {
			const rule = new TBRule();
			const val = 'aaa';

			const fn = makeIsUndefined<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is undefined and mods.invert is true', () => {
			const rule = new TBRule();
			const val = undefined;
			mods.invert = true;
			const fn = makeIsUndefined<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return true when value argument is a string and mods.invert is true', () => {
			const rule = new TBRule();
			const val = 'aaa';
			mods.invert = true;

			const fn = makeIsUndefined<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(true);
		});

		it('should return false when value argument is a number', () => {
			const rule = new TBRule();
			const val = 44410;

			const fn = makeIsUndefined<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty array', () => {
			const rule = new TBRule();
			const val = [];

			const fn = makeIsUndefined<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty object', () => {
			const rule = new TBRule();
			const val = {};

			const fn = makeIsUndefined<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is the number 0', () => {
			const rule = new TBRule();
			const val = 0;

			const fn = makeIsUndefined<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is the number 1', () => {
			const rule = new TBRule();
			const val = 44410;

			const fn = makeIsUndefined<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty string', () => {
			const rule = new TBRule();
			const val = '';

			const fn = makeIsUndefined<TBRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});
	});
});
