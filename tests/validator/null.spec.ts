import KVPOpIsNull, {createIsNull} from '../../src/validator/null';

import KVPRule from '../../src/rule/rule';
import KVPRuleModifiers from '../../src/rule/modifiers';

describe('Empty', () => {
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
		it('should return true when input is null', () => {
			const rule = new KVPRule();
			const value = null;

			const fn = createIsNull<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is null and mods.invert is true', () => {
			const rule = new KVPRule();
			const value = null;
			mods.invert = true;

			const fn = createIsNull<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is non-null and mods.invert is true', () => {
			const rule = new KVPRule();
			const value = 'aaaaaa';
			mods.invert = true;

			const fn = createIsNull<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const rule = new KVPRule();
			const value = 'aaaaaaaaa';

			const fn = createIsNull<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false)', () => {
			const rule = new KVPRule();
			const value = false;

			const fn = createIsNull<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (true)', () => {
			const rule = new KVPRule();
			const value = true;

			const fn = createIsNull<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const rule = new KVPRule();
			const value = 101;

			const fn = createIsNull<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is an empty array', () => {
			const rule = new KVPRule();
			const value = [];

			const fn = createIsNull<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array', () => {
			const rule = new KVPRule();
			const value = ['a', 'b', 'c'];

			const fn = createIsNull<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
