import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {isNullMake} from '../../src/is/null';

describe('IsNull', () => {
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
		it('should return true when input is null', () => {
			const value = null;

			const fn = isNullMake<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is null and mods.invert is true', () => {
			const value = null;
			mods.invert = true;

			const fn = isNullMake<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is non-null and mods.invert is true', () => {
			const value = 'aaaaaa';
			mods.invert = true;

			const fn = isNullMake<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const value = 'aaaaaaaaa';

			const fn = isNullMake<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false)', () => {
			const value = false;

			const fn = isNullMake<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (true)', () => {
			const value = true;

			const fn = isNullMake<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const value = 101;

			const fn = isNullMake<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is an empty array', () => {
			const value: string[] = [];

			const fn = isNullMake<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array', () => {
			const value = ['a', 'b', 'c'];

			const fn = isNullMake<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
