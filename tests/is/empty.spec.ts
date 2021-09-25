import {IsEmpty, isEmptyMake} from '../../src/is/empty';

import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';

const EMPTY_ARRAY: string[] = [];

describe('IsEmpty', () => {
	let rule: Rule;
	let fn: IsEmpty<Rule>;
	let mods: RuleMods;

	beforeAll(() => {
		mods = {
			invert: false,
			target: 'value'
		};

		rule = new Rule();
		fn = isEmptyMake<Rule>(rule, rule, mods);
		fn('aaaa');
	});

	beforeEach(() => {
		mods.invert = false;
		mods.target = 'value';
	});

	describe('Usage', () => {
		it('should return true when input is a non-empty string and mods.invert is true', () => {
			const customRule = new Rule();
			const customFn = isEmptyMake<Rule>(customRule, customRule, {invert: true, target: 'value'});
			const value = 'aaaaaaaaa';
			customFn(value);
			expect(customRule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is an empty array and mods.invert is true', () => {
			const customRule = new Rule();
			const value: string[] = [];
			const customFn = isEmptyMake<Rule>(customRule, customRule, {invert: true, target: 'value'});
			customFn('');
			expect(customRule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty string', () => {
			const value = 'aaaaaaaaa';

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false)', () => {
			const value = false;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (true)', () => {
			const value = true;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a number', () => {
			const value = 101;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is an empty array', () => {
			const customFn = isEmptyMake<Rule>(rule, rule, {invert: false, target: 'value'});
			customFn(EMPTY_ARRAY);
			expect(rule.nodes[0].execute(EMPTY_ARRAY)).toBe(true);
		});

		it('should return false when input is a non-empty array', () => {
			const value: string[] = ['a', 'b', 'c'];
			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
