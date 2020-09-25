import KVPOpLessThanOrEqualTo, {
	createLessThanOrEqualTo
} from '../../../src/rule/operator/less-than-or-equal-to';

import KVPRule from '../../../src/rule/rule';
import KVPRuleModifiers from '../../../src/rule/modifiers';

const MOCK_TARGET = 44410;
const MOCK_CURR = 1111;

describe('LessThan', () => {
	let mods: KVPRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	beforeEach(() => {
		mods.invert = false;
	});

	describe('create', () => {
		it('should return a function', () => {});
	});

	describe('usage', () => {
		it('should return false when curr value argument is not a number', () => {
			const rule = new KVPRule();
			const stringCurr = 'aaaa';

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(MOCK_TARGET);
			expect(rule.nodes[0].execute(stringCurr as any)).toBe(false);
		});

		it('should return true when curr value argument is not a number but mods.invert is true', () => {
			const rule = new KVPRule();
			const stringCurr = 'aaaa';
			mods.invert = true;
			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(MOCK_TARGET);
			expect(rule.nodes[0].execute(stringCurr as any)).toBe(true);
		});

		it('should return false when target value is not a number', () => {
			const rule = new KVPRule();
			const stringTarget = 'ffffffff';

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(stringTarget as any);
			expect(rule.nodes[0].execute(MOCK_CURR)).toBe(false);
		});

		it('should return true when current and target arguments are both 0', () => {
			const rule = new KVPRule();
			const curr = 0;
			const target = 0;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when current is less than target', () => {
			const rule = new KVPRule();
			const curr = 71;
			const target = 105;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return false when current is less than target but mods.invert is true', () => {
			const rule = new KVPRule();
			const curr = 71;
			const target = 105;
			mods.invert = true;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when current is greater than target', () => {
			const rule = new KVPRule();
			const curr = 88;
			const target = 44;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return true when positive integer current is equal to positive integer target', () => {
			const rule = new KVPRule();
			const curr = 101;
			const target = 101;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return false when positive integer current is greater than positive integer target', () => {
			const rule = new KVPRule();
			const curr = 25;
			const target = 10;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when positive integer current is greater than negative integer target', () => {
			const rule = new KVPRule();
			const curr = 25;
			const target = -10;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return true when negative integer current is equal to than negative integer target', () => {
			const rule = new KVPRule();
			const curr = -33;
			const target = -33;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return false when negative integer current is greater than negative integer target', () => {
			const rule = new KVPRule();
			const curr = -2;
			const target = -10;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when positive float current is greater than negative integer target', () => {
			const rule = new KVPRule();
			const curr = 2.223;
			const target = -10;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when negative float current is greater than negative integer target', () => {
			const rule = new KVPRule();
			const curr = -3.3;
			const target = -10;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when positive integer current is greater than negative integer target', () => {
			const rule = new KVPRule();
			const curr = 25;
			const target = -10;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when positive float current is greater than negative float target', () => {
			const rule = new KVPRule();
			const curr = 4.4422;
			const target = -5.2111;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when negative float current is greater than negative float target', () => {
			const rule = new KVPRule();
			const curr = -7.11;
			const target = -11.5557;

			const fn = createLessThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});
