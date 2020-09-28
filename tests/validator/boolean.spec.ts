import {KVPRule} from '../../src/rule/rule';
import {KVPRuleModifiers} from '../../src/rule/modifiers';
import {createIsBoolean} from '../../src/validator/boolean';

describe('KVPBoolean', () => {
	let mods: KVPRuleModifiers;

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
			const rule = new KVPRule();
			const value = 'aaaaaaaaa';
			mods.invert = false;
			const fn = createIsBoolean<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is an empty array and mods.invert is true', () => {
			const rule = new KVPRule();
			const value = [];
			mods.invert = true;
			const fn = createIsBoolean<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const rule = new KVPRule();
			const value = 'aaaaaaaaa';

			const fn = createIsBoolean<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (false)', () => {
			const rule = new KVPRule();
			const value = false;

			const fn = createIsBoolean<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a boolean (false) and invert flag is active', () => {
			const rule = new KVPRule();
			const value = false;
			mods.invert = true;

			const fn = createIsBoolean<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (true)', () => {
			const rule = new KVPRule();
			const value = true;

			const fn = createIsBoolean<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a boolean (true)', () => {
			const rule = new KVPRule();
			const value = true;
			mods.invert = true;

			const fn = createIsBoolean<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const rule = new KVPRule();
			const value = 101;

			const fn = createIsBoolean<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is an empty array', () => {
			const rule = new KVPRule();
			const value = [];

			const fn = createIsBoolean<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array', () => {
			const rule = new KVPRule();
			const value = ['a', 'b', 'c'];

			const fn = createIsBoolean<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
