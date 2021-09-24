import {IsUndefined, isUndefinedMake} from '../../src/is/undefined';

import {Rule} from '../../src/rule';

describe('IsUndefined', () => {
	let rule: Rule;
	let fn: IsUndefined<Rule>;

	beforeAll(() => {
		rule = new Rule();
		fn = isUndefinedMake<Rule>(rule, rule, {invert: false});
		fn();
	});

	describe('Usage', () => {
		it('should return true when value argument is undefined', () => {
			const val = undefined;

			expect(rule.nodes[0].execute(val)).toBe(true);
		});

		it('should return false when value argument is a string', () => {
			const val = 'aaa';

			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is undefined and mods.invert is true', () => {
			const val = undefined;
			const customRule = new Rule();
			const customFn = isUndefinedMake<Rule>(customRule, customRule, {invert: true});
			customFn();

			expect(customRule.nodes[0].execute(val)).toBe(false);
		});

		it('should return true when value argument is a string and mods.invert is true', () => {
			const val = 'aaa';

			const customRule = new Rule();
			const customFn = isUndefinedMake<Rule>(customRule, customRule, {invert: true});
			customFn();

			expect(customRule.nodes[0].execute(val)).toBe(true);
		});

		it('should return false when value argument is a number', () => {
			const val = 44410;

			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty array', () => {
			const val: string[] = [];

			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty object', () => {
			const val = {};

			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is the number 0', () => {
			const val = 0;

			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is the number 1', () => {
			const val = 44410;

			expect(rule.nodes[0].execute(val)).toBe(false);
		});

		it('should return false when value argument is an empty string', () => {
			const val = '';

			expect(rule.nodes[0].execute(val)).toBe(false);
		});
	});
});
