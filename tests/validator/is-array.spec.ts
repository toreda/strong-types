import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsArray} from '../../src/is/array';

describe('IsArray', () => {
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
		it('should return true when input is an empty array', () => {
			const rule = new Rule();
			const value: string[] = [];

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true when input is a non-empty array', () => {
			const rule = new Rule();
			const value: string[] = ['a', 'b', 'c'];

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is an empty array and invert flag is active', () => {
			const rule = new Rule();
			const value: string[] = [];
			mods.invert = true;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array and invert flag is active', () => {
			const rule = new Rule();
			const value = ['a', 'b', 'c'];
			mods.invert = true;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a non-empty string and mods.invert is true', () => {
			const rule = new Rule();
			const value = 'aaaaaaaaa';
			mods.invert = true;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const rule = new Rule();
			const value = 'aaaaaaaaa';

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false)', () => {
			const rule = new Rule();
			const value = false;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (true)', () => {
			const rule = new Rule();
			const value = true;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const rule = new Rule();
			const value = 101;

			const fn = makeIsArray<Rule>(rule, rule, mods);
			fn();
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
