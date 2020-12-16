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

	beforeEach(() => {
		mods.invert = false;
	});

	describe('Usage', () => {
		it('should return true for a date string', () => {
			const rule = new STRule();
			// prettier-ignore
			const value = '([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		it('should return false for a number', () => {
			const rule = new STRule();

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			const value = 12;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a date time string', () => {
			const rule = new STRule();
			// prettier-ignore
			// eslint-disable-next-line
			const value = '([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const rule = new STRule();
			const value = [] as any;

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

		it('should return false for a time string', () => {
			const rule = new STRule();
			const value = '([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]' as any;

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
