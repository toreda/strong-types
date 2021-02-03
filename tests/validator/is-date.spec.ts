import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsDate} from '../../src/validator/is-date';

describe('IsDate', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true for a valid date string', () => {
			const rule = new STRule();
			const value = '2020-12-24';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a date string without the day', () => {
			const rule = new STRule();
			const value = '2015-08';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a date string without the day and month', () => {
			const rule = new STRule();
			const value = '2008';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const rule = new STRule();
			const value = 'Tue Mar 24 2015';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const rule = new STRule();
			const value = 'Sun, 03 Feb 2019';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const rule = new STRule();
			const value = '02.26.2016';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const rule = new STRule();
			const value = '2016.02.16';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const rule = new STRule();
			const value = '2015-03-25';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const rule = new STRule();
			const value = '03/25/2015';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const rule = new STRule();
			const value = 'Mar 25 2015';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const rule = new STRule();
			const value = '25 Mar 2015';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		it('should return false for a date string that includes time', () => {
			const rule = new STRule();
			const value = '1886-05-15T22:35:52';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a time string', () => {
			const rule = new STRule();
			const value = '22:35:52';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an invalid date string', () => {
			const rule = new STRule();
			const value = 'Feb 15th';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with an invalid month', () => {
			const rule = new STRule();
			const value = '25 Ma 2015';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid day', () => {
			const rule = new STRule();
			const value = '45 Mar 2015';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid day', () => {
			const rule = new STRule();
			const value = '03/55/2015';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string missing a slash', () => {
			const rule = new STRule();
			const value = '0355/2015';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid month', () => {
			const rule = new STRule();
			const value = '13/55/2015';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid month', () => {
			const rule = new STRule();
			const value = 'Sun, 03 Fe 2019';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid month', () => {
			const rule = new STRule();
			const value = 'Tue Ma 24 2015';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid day', () => {
			const rule = new STRule();
			const value = 'Tue Mar 33 2015';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an invalid date string', () => {
			const rule = new STRule();
			const value = '2015-0325';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid month', () => {
			const rule = new STRule();
			const value = '2016.0.16';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a number', () => {
			const rule = new STRule();

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			const value = 12;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an empty array', () => {
			const rule = new STRule();
			const value = [] as any;

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const rule = new STRule();
			const value = ['Sun, 03 Feb 2019'] as any;

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a boolean', () => {
			const rule = new STRule();
			const value = false as any;

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should reject empty object input', () => {
			const rule = new STRule();
			const value = {} as any;

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is null', () => {
			const rule = new STRule();
			const value = null as any;

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const rule = new STRule();
			const value = undefined as any;

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
