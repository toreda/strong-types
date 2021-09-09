import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsArray} from '../../src/validator/is-array';

describe('IsArray', () => {
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
		it('should return true when input is an empty array', () => {
			const rule = new STRule();
			const value: string[] = [];

			const fn = makeIsArray<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true when input is a non-empty array', () => {
			const rule = new STRule();
			const value: string[] = ['a', 'b', 'c'];

			const fn = makeIsArray<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is an empty array and invert flag is active', () => {
			const rule = new STRule();
			const value: string[] = [];
			mods.invert = true;

			const fn = makeIsArray<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array and invert flag is active', () => {
			const rule = new STRule();
			const value = ['a', 'b', 'c'];
			mods.invert = true;

			const fn = makeIsArray<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a non-empty string and mods.invert is true', () => {
			const rule = new STRule();
			const value = 'aaaaaaaaa';
			mods.invert = true;

			const fn = makeIsArray<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const rule = new STRule();
			const value = 'aaaaaaaaa';

			const fn = makeIsArray<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false)', () => {
			const rule = new STRule();
			const value = false;

			const fn = makeIsArray<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (true)', () => {
			const rule = new STRule();
			const value = true;

			const fn = makeIsArray<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const rule = new STRule();
			const value = 101;

			const fn = makeIsArray<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
