import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsEmail} from '../../src/validator/is-email';

describe('IsEmail', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true for a email string', () => {
			const rule = new STRule();

			const value = 'test@test.com';

			const fn = makeIsEmail<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		it('should return false for a number', () => {
			const rule = new STRule();

			const fn = makeIsEmail<STRule>(rule, rule, mods);
			fn();

			const value = 8;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const rule = new STRule();
			const value = [] as any;

			const fn = makeIsEmail<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a boolean', () => {
			const rule = new STRule();
			const value = false as any;

			const fn = makeIsEmail<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should reject empty object input', () => {
			const rule = new STRule();
			const value = {} as any;

			const fn = makeIsEmail<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is null', () => {
			const rule = new STRule();
			const value = null as any;

			const fn = makeIsEmail<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const rule = new STRule();
			const value = undefined as any;

			const fn = makeIsEmail<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
