import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsEmail} from '../../src/is/email';

describe('IsEmail', () => {
	let mods: RuleMods;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true for an email string', () => {
			const rule = new Rule();

			const value = 'test@test.com';

			const fn = makeIsEmail<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		it('should return false for a string', () => {
			const rule = new Rule();

			const value = 'test com';

			const fn = makeIsEmail<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a number', () => {
			const rule = new Rule();

			const fn = makeIsEmail<Rule>(rule, rule, mods);
			fn();

			const value = 8;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const rule = new Rule();
			const value = [] as any;

			const fn = makeIsEmail<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a boolean', () => {
			const rule = new Rule();
			const value = false as any;

			const fn = makeIsEmail<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should reject empty object input', () => {
			const rule = new Rule();
			const value = {} as any;

			const fn = makeIsEmail<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is null', () => {
			const rule = new Rule();
			const value = null as any;

			const fn = makeIsEmail<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const rule = new Rule();
			const value = undefined as any;

			const fn = makeIsEmail<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
