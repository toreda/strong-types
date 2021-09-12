import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsBoolean} from '../../src/is/boolean';

describe('Bool', () => {
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
		it('should return false when input is a non-empty string and mods.invert is false', () => {
			const value = 'aaaaaaaaa';
			mods.invert = false;
			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is an empty array and mods.invert is true', () => {
			const value: boolean[] = [];
			mods.invert = true;
			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const value: string = 'aaaaaaaaa';

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (false)', () => {
			const value: boolean = false;

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a boolean (false) and invert flag is active', () => {
			const value: boolean = false;
			mods.invert = true;

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (true)', () => {
			const value = true;

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a boolean (true)', () => {
			const value = true;
			mods.invert = true;

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const value = 101;

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is an empty array', () => {
			const value: string[] = [];

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array', () => {
			const value = ['a', 'b', 'c'];

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
