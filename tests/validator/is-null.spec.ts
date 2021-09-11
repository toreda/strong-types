import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsNull} from '../../src/is/null';

describe('IsNull', () => {
	let mods: RuleMods;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	beforeEach(() => {
		mods.invert = false;
	});

	describe('Usage', () => {
		it('should return true when input is null', () => {
			const rule = new Rule();
			const value = null;

			const fn = makeIsNull<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is null and mods.invert is true', () => {
			const rule = new Rule();
			const value = null;
			mods.invert = true;

			const fn = makeIsNull<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is non-null and mods.invert is true', () => {
			const rule = new Rule();
			const value = 'aaaaaa';
			mods.invert = true;

			const fn = makeIsNull<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const rule = new Rule();
			const value = 'aaaaaaaaa';

			const fn = makeIsNull<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false)', () => {
			const rule = new Rule();
			const value = false;

			const fn = makeIsNull<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (true)', () => {
			const rule = new Rule();
			const value = true;

			const fn = makeIsNull<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const rule = new Rule();
			const value = 101;

			const fn = makeIsNull<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is an empty array', () => {
			const rule = new Rule();
			const value: string[] = [];

			const fn = makeIsNull<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array', () => {
			const rule = new Rule();
			const value = ['a', 'b', 'c'];

			const fn = makeIsNull<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
