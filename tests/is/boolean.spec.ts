import {IsBoolean, makeIsBoolean} from '../../src/is/boolean';

import {Rule} from '../../src/rule';

describe('IsBoolean', () => {
	let rule: Rule;
	let fn: IsBoolean<Rule>;

	beforeAll(() => {
		rule = new Rule();
		fn = makeIsBoolean<Rule>(rule, rule, {invert: false});
		fn();
	});

	describe('Usage', () => {
		it('should return false when input is a non-empty string and mods.invert is false', () => {
			const value = 'aaaaaaaaa';
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is an empty array and mods.invert is true', () => {
			const value: boolean[] = [];

			const customRule = new Rule();

			const customFn = makeIsBoolean<Rule>(customRule, customRule, {invert: true});
			customFn();
			expect(customRule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a non-empty string', () => {
			const value: string = 'aaaaaaaaa';

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (false)', () => {
			const value: boolean = false;

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a boolean (true) and invert flag is active', () => {
			const value: boolean = true;
			const customRule = new Rule();

			const customFn = makeIsBoolean<Rule>(customRule, customRule, {invert: true});
			customFn();
			expect(customRule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a boolean (false) and invert flag is active', () => {
			const value: boolean = false;
			const customRule = new Rule();

			const customFn = makeIsBoolean<Rule>(customRule, customRule, {invert: true});
			customFn();
			expect(customRule.nodes[0].execute(value)).toBe(false);
		});

		it('should return true when input is a boolean (true)', () => {
			const value = true;

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true when input is a boolean (false)', () => {
			const value = false;

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return false when input is a number', () => {
			const value = 101;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is an empty array', () => {
			const value: string[] = [];

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when input is a non-empty array', () => {
			const value = ['a', 'b', 'c'];

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
