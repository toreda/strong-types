import KVPOpGreaterThanOrEqualTo, {
	createGreaterThanOrEqualTo
} from '../../../src/rule/operator/greater-than-or-equal-to';

import KVPRule from '../../../src/rule/rule';
import KVPRuleModifiers from '../../../src/rule/modifiers';

const MOCK_TARGET = 44410;
const MOCK_CURR = 1111;

describe('GreaterThanOrEqualTo', () => {
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

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(MOCK_TARGET);
			expect(rule.nodes[0].execute(stringCurr as any)).toBe(false);
		});

		it('should return false when target value is not a number', () => {
			const rule = new KVPRule();
			const stringTarget = 'ffffffff';

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(stringTarget as any);
			expect(rule.nodes[0].execute(MOCK_CURR)).toBe(false);
		});

		it('should return true when both current and target arguments are 0', () => {
			const rule = new KVPRule();
			const curr = 0;
			const target = 0;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return false when both current and target arguments are 0 but invert flag is active', () => {
			const rule = new KVPRule();
			const curr = 0;
			const target = 0;
			mods.invert = true;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when current is less than target', () => {
			const rule = new KVPRule();
			const curr = 23;
			const target = 77;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return true when current is less than target but invert flag is active', () => {
			const rule = new KVPRule();
			const curr = 23;
			const target = 77;
			mods.invert = true;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive integer current is greater than positive integer target', () => {
			const rule = new KVPRule();
			const curr = 25;
			const target = 10;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return false when positive integer current is greater than positive integer target, but invert flag is active', () => {
			const rule = new KVPRule();
			const curr = 25;
			const target = 10;
			mods.invert = true;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return true when positive integer current is greater than negative integer target', () => {
			const rule = new KVPRule();
			const curr = 25;
			const target = -10;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when negative integer current is greater than negative integer target', () => {
			const rule = new KVPRule();
			const curr = -2;
			const target = -10;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive float current is greater than negative integer target', () => {
			const rule = new KVPRule();
			const curr = 2.223;
			const target = -10;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when negative float current is greater than negative integer target', () => {
			const rule = new KVPRule();
			const curr = -3.3;
			const target = -10;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive integer current is greater than negative integer target', () => {
			const rule = new KVPRule();
			const curr = 25;
			const target = -10;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when positive float current is greater than negative float target', () => {
			const rule = new KVPRule();
			const curr = 4.4422;
			const target = -5.2111;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when negative float current is greater than negative float target', () => {
			const rule = new KVPRule();
			const curr = -7.11;
			const target = -11.5557;

			const fn = createGreaterThanOrEqualTo<KVPRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});
	});
});
