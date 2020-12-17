import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsUrl} from '../../src/validator/is-url';

describe('IsUrl', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true for a url string containing http', () => {
			const rule = new STRule();

			const value = 'http://test.com';

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
		it('should return true for a url string containing Http', () => {
			const rule = new STRule();

			const value = 'Http://somedomain.com';

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
		it('should return true for a url string containing Wss', () => {
			const rule = new STRule();

			const value = 'Wss://somedomain.com:8080';

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		it('should return false for a number', () => {
			const rule = new STRule();

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			const value = 8;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const rule = new STRule();
			const value = [] as any;

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a boolean', () => {
			const rule = new STRule();
			const value = false as any;

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should reject empty object input', () => {
			const rule = new STRule();
			const value = {} as any;

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is null', () => {
			const rule = new STRule();
			const value = null as any;

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const rule = new STRule();
			const value = undefined as any;

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
