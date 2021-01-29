import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsDateTime} from '../../src/validator/is-dateTime';

describe('IsDateTime', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true for a full dateTime string', () => {
			const rule = new STRule();
			const value = '2020-12-24T21:52:45';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a full dateTime string without T', () => {
			const rule = new STRule();
			const value = '2020-12-24 21:52:45';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a dateTime string with the following timestamp', () => {
			const rule = new STRule();
			const value = '02.26.2016 11:48:43';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a dateTime string with the following timestamp', () => {
			const rule = new STRule();
			const value = '2020.02.24 11:48:43';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a dateTime string with the following timestamp', () => {
			const rule = new STRule();
			const value = 'Tue Mar 24 2016 21:24:31 GMT-0400';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a dateTime string with the following timestamp', () => {
			const rule = new STRule();
			const value = 'Sun, 03 Feb 2019 13:27:49 GMT';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for the following timestamp', () => {
			const rule = new STRule();
			const value = 'THH:mm:ss.sss';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a the following timestamp', () => {
			const rule = new STRule();
			const value = 'THH:mm:ss';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for the following timestamp', () => {
			const rule = new STRule();
			const value = 'THH:mm';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		it('should return false for a date string without the time', () => {
			const rule = new STRule();
			const value = '2015-08-15';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a time string', () => {
			const rule = new STRule();
			const value = '22:35:52';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a string', () => {
			const rule = new STRule();
			const value = 'Feb 15th';

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a number', () => {
			const rule = new STRule();

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			const value = 12;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const rule = new STRule();
			const value = [] as any;

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a boolean', () => {
			const rule = new STRule();
			const value = false as any;

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should reject empty object input', () => {
			const rule = new STRule();
			const value = {} as any;

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is null', () => {
			const rule = new STRule();
			const value = null as any;

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const rule = new STRule();
			const value = undefined as any;

			const fn = makeIsDateTime<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
