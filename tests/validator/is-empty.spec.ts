import {IsEmpty, makeIsEmpty} from '../../src/is/empty';

import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';

const EMPTY_ARRAY: string[] = [];

describe('empty', () => {
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
		it('should return true when input is a non-empty string and mods.invert is true', () => {
			const rule = new Rule();
			const value = 'aaaaaaaaa';
			mods.invert = true;
			const fn = makeIsEmpty<Rule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is an empty array and mods.invert is true', () => {
			const rule = new Rule();
			const value: string[] = [];
			mods.invert = true;

			const fn = makeIsEmpty<Rule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty string', () => {
			const rule = new Rule();
			const value = 'aaaaaaaaa';

			const fn = makeIsEmpty<Rule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false)', () => {
			const rule = new Rule();
			const value = false;

			const fn = makeIsEmpty<Rule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (true)', () => {
			const rule = new Rule();
			const value = true;

			const fn = makeIsEmpty<Rule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const rule = new Rule();
			const value = 101;

			const fn = makeIsEmpty<Rule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is an empty array', () => {
			const rule = new Rule();

			const fn = makeIsEmpty<Rule>(rule, rule, mods);
			fn(EMPTY_ARRAY);
			expect(rule.nodes[0].execute(EMPTY_ARRAY)).toBe(true);
		});

		it('should return false when input is a non-empty arrya', () => {
			const rule = new Rule();
			const value: string[] = ['a', 'b', 'c'];

			const fn = makeIsEmpty<Rule>(rule, rule, mods);
			fn(value);
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
