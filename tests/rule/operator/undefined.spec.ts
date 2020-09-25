import KVPOpIsUndefined, {createIsUndefined} from '../../../src/rule/operator/undefined';

import KVPRule from '../../../src/rule/rule';
import KVPRuleModifiers from '../../../src/rule/modifiers';

describe('IsUndefined', () => {
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
		it('should return true when value argument is undefined', () => {
			const rule = new KVPRule();
			const val = undefined;

			const fn = createIsUndefined<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(true);
		});

		it('should return false when value argument is a string', () => {
			const rule = new KVPRule();
			const val = 'aaa';

			const fn = createIsUndefined<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is undefined and mods.invert is true', () => {
			const rule = new KVPRule();
			const val = undefined;
			mods.invert = true;
			const fn = createIsUndefined<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return true when value argument is a string and mods.invert is true', () => {
			const rule = new KVPRule();
			const val = 'aaa';
			mods.invert = true;

			const fn = createIsUndefined<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(true);
		});

		it('should return false when value argument is a number', () => {
			const rule = new KVPRule();
			const val = 44410;

			const fn = createIsUndefined<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty array', () => {
			const rule = new KVPRule();
			const val = [];

			const fn = createIsUndefined<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty object', () => {
			const rule = new KVPRule();
			const val = {};

			const fn = createIsUndefined<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is the number 0', () => {
			const rule = new KVPRule();
			const val = 0;

			const fn = createIsUndefined<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is the number 1', () => {
			const rule = new KVPRule();
			const val = 44410;

			const fn = createIsUndefined<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty string', () => {
			const rule = new KVPRule();
			const val = '';

			const fn = createIsUndefined<KVPRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});
	});
});
