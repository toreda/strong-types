import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {isDateMake} from '../../src/is/date';

describe('IsDate', () => {
	let mods: RuleMods;
	let rule: Rule;

	beforeAll(() => {
		rule = new Rule();
		mods = {
			invert: false
		};
	});

	beforeEach(() => {
		mods.invert = false;
		rule.reset();
	});

	describe('Usage', () => {
		it('should return true for a valid date string', () => {
			const value = '2020-12-24';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a date string without the day', () => {
			const value = '2015-08';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a date string without the day and month', () => {
			const value = '2008';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const value = 'Tue Mar 24 2015';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const value = 'Sun, 03 Feb 2019';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const value = '02.26.2016';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const value = '2016.02.16';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const value = '2015-03-25';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const value = '03/25/2015';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const value = 'Mar 25 2015';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid date string', () => {
			const value = '25 Mar 2015';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		it('should return false for a date string that includes time', () => {
			const value = '1886-05-15T22:35:52';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string that includes time', () => {
			const value = '1886-05-15T22:35';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string that includes time', () => {
			const value = '1886-05-15T22:';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string that includes time', () => {
			const value = '1886-05-15T22';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string that includes time', () => {
			const value = '1886-05-15T';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a time string', () => {
			const value = '22:35:52';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an invalid date string', () => {
			const value = 'Feb 15th';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with an invalid month', () => {
			const value = '25 Ma 2015';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid day', () => {
			const value = '45 Mar 2015';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid day', () => {
			const value = '03/55/2015';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string missing a slash', () => {
			const value = '0355/2015';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid month', () => {
			const value = '13/55/2015';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid month', () => {
			const value = 'Sun, 03 Fe 2019';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid month', () => {
			const value = 'Tue Ma 24 2015';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid day', () => {
			const value = 'Tue Mar 33 2015';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an invalid date string', () => {
			const value = '2015-0325';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date string with invalid month', () => {
			const value = '2016.0.16';

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a number', () => {
			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			const value = 12;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an empty array', () => {
			const value = [] as any;

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const value = ['Sun, 03 Feb 2019'] as any;

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a boolean', () => {
			const value = false as any;

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should reject empty object input', () => {
			const value = {} as any;

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is null', () => {
			const value = null as any;

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const value = undefined as any;

			const fn = isDateMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
