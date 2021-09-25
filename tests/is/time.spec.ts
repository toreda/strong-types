import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {isTimeMake} from '../../src/is/time';

describe('IsTime', () => {
	let mods: RuleMods;
	let rule: Rule;

	beforeAll(() => {
		rule = new Rule();
		mods = {
			invert: false,
			target: 'value'
		};
	});

	beforeEach(() => {
		mods.invert = false;
		mods.target = 'value';
		rule.reset();
	});

	describe('Usage', () => {
		it('should return true for a time string', () => {
			const value = '18:42:56';

			const fn = isTimeMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		it('should return false for a date string', () => {
			const value = '2020-11-27';

			const fn = isTimeMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date time string', () => {
			const value = '2020-11-27T14:52:26';

			const fn = isTimeMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a string', () => {
			const value = 'time';

			const fn = isTimeMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a number', () => {
			const fn = isTimeMake<Rule>(rule, rule, mods);
			fn();

			const value = 8;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const value = [] as any;

			const fn = isTimeMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a boolean', () => {
			const value = false as any;

			const fn = isTimeMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should reject empty object input', () => {
			const value = {} as any;

			const fn = isTimeMake<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is null', () => {
			const value = null as any;

			const fn = isTimeMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const value = undefined as any;

			const fn = isTimeMake<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
