import {IsEmail, makeIsEmail} from '../../src/is/email';

import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';

describe('IsEmail', () => {
	let mods: RuleMods;
	let rule: Rule;
	let fn: IsEmail<Rule>;

	beforeAll(() => {
		rule = new Rule();

		mods = {
			invert: false
		};
		fn = makeIsEmail<Rule>(rule, rule, mods);
		fn();
	});

	beforeEach(() => {
		mods.invert = false;
	});

	describe('Usage', () => {
		it('should return true for an email string', () => {
			const value = 'test@test.com';

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		it('should return false for a string', () => {
			const value = 'test com';

			const fn = makeIsEmail<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a number', () => {
			const value = 8;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const value = [] as any;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a boolean', () => {
			const value = false as any;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should reject empty object input', () => {
			const value = {} as any;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is null', () => {
			const value = null as any;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const value = undefined as any;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
