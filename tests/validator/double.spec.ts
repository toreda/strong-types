import KVPOpIsDouble, {createIsDouble} from '../../src/validator/double';

import KVPRule from '../../src/rule/rule';
import KVPRuleModifiers from '../../src/rule/modifiers';

describe('Double', () => {
	let mods: KVPRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	beforeEach(() => {
		mods.invert = false;
	});

	describe('createIsDouble', () => {
		it('should return a function', () => {
			const rule = new KVPRule();

			const fn = createIsDouble<KVPRule>(rule, rule, mods);
			expect(typeof fn).toBe('function');
		});
	});

	describe('Usage', () => {
		it('should return false when curr is NaN', () => {
			const rule = new KVPRule();

			const fn = createIsDouble<KVPRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(NaN)).toBe(false);
		});

		it('should return false when curr value is a string', () => {
			const rule = new KVPRule();

			const fn = createIsDouble<KVPRule>(rule, rule, mods);
			fn();

			const str = '111111111';
			expect(rule.nodes[0].execute(str)).toBe(false);
		});

		it('should return true when curr a positive float', () => {
			const rule = new KVPRule();
			const floatCurr = 1.333;

			const fn = createIsDouble<KVPRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(floatCurr)).toBe(true);
		});

		it('should return true when curr is a negative float', () => {
			const rule = new KVPRule();
			const floatCurr = -7.333;

			const fn = createIsDouble<KVPRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(floatCurr)).toBe(true);
		});

		it('should return false when curr is a negative float, but invert flag is active', () => {
			const rule = new KVPRule();
			const floatCurr = -7.333;
			mods.invert = true;

			const fn = createIsDouble<KVPRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return true when curr a positive integer', () => {
			const rule = new KVPRule();
			const intCurr = 7;

			const fn = createIsDouble<KVPRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(intCurr)).toBe(true);
		});

		it('should return true when curr a negative integer', () => {
			const rule = new KVPRule();
			const intCurr = -43;

			const fn = createIsDouble<KVPRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(intCurr)).toBe(true);
		});

		it('should return false when curr is a boolean, true (non-number)', () => {
			const rule = new KVPRule();
			const curr = true;

			const fn = createIsDouble<KVPRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is a boolean, false (non-number)', () => {
			const rule = new KVPRule();
			const curr = false;

			const fn = createIsDouble<KVPRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is an empty array (non-number)', () => {
			const rule = new KVPRule();
			const curr = [];

			const fn = createIsDouble<KVPRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});
