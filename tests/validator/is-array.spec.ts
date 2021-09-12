import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsArray} from '../../src/is/array';

describe('IsArray', () => {
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
		it('should return true when input is an empty array', () => {
			const value: string[] = [];

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true when input is a non-empty array', () => {
			const value: string[] = ['a', 'b', 'c'];

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is an empty array and invert flag is active', () => {
			const value: string[] = [];
			mods.invert = true;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array and invert flag is active', () => {
			const value = ['a', 'b', 'c'];
			mods.invert = true;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a non-empty string and mods.invert is true', () => {
			const value = 'aaaaaaaaa';
			mods.invert = true;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const value = 'aaaaaaaaa';

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false)', () => {
			const value = false;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (true)', () => {
			const value = true;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const value = 101;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
