import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsBoolean} from '../../src/is/boolean';

describe('STBoolean', () => {
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
		it('should return false when input is a non-empty string and mods.invert is false', () => {
			const rule = new Rule();
			const value = 'aaaaaaaaa';
			mods.invert = false;
			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is an empty array and mods.invert is true', () => {
			const rule = new Rule();
			const value: boolean[] = [];
			mods.invert = true;
			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const rule = new Rule();
			const value: string = 'aaaaaaaaa';

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (false)', () => {
			const rule = new Rule();
			const value: boolean = false;

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a boolean (false) and invert flag is active', () => {
			const rule = new Rule();
			const value: boolean = false;
			mods.invert = true;

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (true)', () => {
			const rule = new Rule();
			const value = true;

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a boolean (true)', () => {
			const rule = new Rule();
			const value = true;
			mods.invert = true;

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const rule = new Rule();
			const value = 101;

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is an empty array', () => {
			const rule = new Rule();
			const value: string[] = [];

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array', () => {
			const rule = new Rule();
			const value = ['a', 'b', 'c'];

			const fn = makeIsBoolean<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
