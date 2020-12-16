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

	describe('makeIsDate', () => {
		it('should return a function', () => {
			const rule = new STRule();

			const fn = makeIsDate<STRule>(rule, rule, mods);
			expect(typeof fn).toBe('function');
		});
	});

	describe('Usage', () => {
		it('should return false when curr value is a number', () => {
			const rule = new STRule();

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			const int = 12;
			expect(rule.nodes[0].execute(int)).toBe(false);
		});

		it('should return false when curr is a date time string', () => {
			const rule = new STRule();
			// prettier-ignore
			// eslint-disable-next-line
			const dateStr = '([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(dateStr)).toBe(false);
		});

		it('should return false when curr is an array', () => {
			const rule = new STRule();
			const arrCurr = [];

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(arrCurr)).toBe(false);
		});

		it('should return false when curr is a boolean', () => {
			const rule = new STRule();
			const booleanCurr = false;

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(booleanCurr)).toBe(false);
		});

		it('should return false when curr is a time string', () => {
			const rule = new STRule();
			const timeCurr = '([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(timeCurr)).toBe(false);
		});

		it('should return false when curr is null', () => {
			const rule = new STRule();
			const nullCurr = null;

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(nullCurr)).toBe(false);
		});

		it('should return false when curr is undefined', () => {
			const rule = new STRule();
			const value = undefined;

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when curr is a date string', () => {
			const rule = new STRule();
			// prettier-ignore
			const dateCurr = '([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))';

			const fn = makeIsDate<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(dateCurr)).toBe(true);
		});
	});
});
