import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsTime} from '../../src/is/time';

describe('IsTime', () => {
	let mods: RuleMods;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true for a time string', () => {
			const rule = new Rule();

			const value = '18:42:56';

			const fn = makeIsTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		it('should return false for a date string', () => {
			const rule = new Rule();

			const value = '2020-11-27';

			const fn = makeIsTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date time string', () => {
			const rule = new Rule();

			const value = '2020-11-27T14:52:26';

			const fn = makeIsTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a string', () => {
			const rule = new Rule();

			const value = 'time';

			const fn = makeIsTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a number', () => {
			const rule = new Rule();

			const fn = makeIsTime<Rule>(rule, rule, mods);
			fn();

			const value = 8;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const rule = new Rule();
			const value = [] as any;

			const fn = makeIsTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a boolean', () => {
			const rule = new Rule();
			const value = false as any;

			const fn = makeIsTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should reject empty object input', () => {
			const rule = new Rule();
			const value = {} as any;

			const fn = makeIsTime<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is null', () => {
			const rule = new Rule();
			const value = null as any;

			const fn = makeIsTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const rule = new Rule();
			const value = undefined as any;

			const fn = makeIsTime<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
