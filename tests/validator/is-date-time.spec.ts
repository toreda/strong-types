import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsDateTime} from '../../src/is/date-time';

describe('IsDateTime', () => {
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
		it('should return true for a full dateTime string', () => {
			const value = '2020-12-24T21:52:45';

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a full dateTime string without T', () => {
			const value = '2020.12.24 21:52:45';

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a dateTime string with the following timestamp', () => {
			const value = '02.26.2016 11:48:43';

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a dateTime string with the following timestamp', () => {
			const value = '02.26.2016 11:48';

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a dateTime string with the following timestamp', () => {
			const value = '02.26.2016 11:48:54.44';

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a dateTime string with the following timestamp', () => {
			const value = 'Tue Mar 24 2016 21:24:31 GMT-0400';

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a dateTime string with the following timestamp', () => {
			const value = 'Sun, 03 Feb 2019 13:27:49 GMT';

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for the following timestamp', () => {
			const value = '1898-06-30T20:34:32.023';

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a the following timestamp', () => {
			const value = '2021-02-24T21:45:33';

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for the following timestamp', () => {
			const value = '2005-02-15T08:34';

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		it('should return false for a string', () => {
			const value = 'Feb 15th';

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a number', () => {
			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			const value = 12;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const value = [] as any;

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a boolean', () => {
			const value = false as any;

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should reject empty object input', () => {
			const value = {} as any;

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is null', () => {
			const value = null as any;

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const value = undefined as any;

			const fn = makeIsDateTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
