import KVPOpIsUndefined, {createIsUndefined} from '../../../src/rule/operator/undefined';

import KVPRule from '../../../src/rule/rule';

describe('IsUndefined', () => {
	describe('Usage', () => {
		it('should return false when value argument is undefined', () => {
			const rule = new KVPRule();
			const val = undefined;

			const fn = createIsUndefined<KVPRule>(rule, rule);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(true);
		});

		it('should return false when value argument is a string', () => {
			const rule = new KVPRule();
			const val = 'aaa';

			const fn = createIsUndefined<KVPRule>(rule, rule);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is a number', () => {
			const rule = new KVPRule();
			const val = 44410;

			const fn = createIsUndefined<KVPRule>(rule, rule);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty array', () => {
			const rule = new KVPRule();
			const val = [];

			const fn = createIsUndefined<KVPRule>(rule, rule);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty object', () => {
			const rule = new KVPRule();
			const val = {};

			const fn = createIsUndefined<KVPRule>(rule, rule);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is the number 0', () => {
			const rule = new KVPRule();
			const val = 0;

			const fn = createIsUndefined<KVPRule>(rule, rule);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is the number 1', () => {
			const rule = new KVPRule();
			const val = 44410;

			const fn = createIsUndefined<KVPRule>(rule, rule);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty string', () => {
			const rule = new KVPRule();
			const val = '';

			const fn = createIsUndefined<KVPRule>(rule, rule);
			fn();
			expect(rule.nodes[0].execute(val)).toBe(false);
		});
	});
});
