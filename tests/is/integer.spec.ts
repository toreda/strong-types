import {IsInt, isIntMake} from '../../src/is/int';

import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {isGreaterThanMake} from '../../src/is/greater-than';

const EMPTY_ARRAY: string[] = [];

describe('Integer', () => {
	let mods: RuleMods;
	let rule: Rule;
	let fn: IsInt<Rule>;

	beforeAll(() => {
		rule = new Rule();
		mods = {
			invert: false
		};
		fn = isIntMake<Rule>(rule, rule, mods);
		fn();
	});

	describe('isIntMake', () => {
		it('should return a function', () => {
			expect(typeof fn).toBe('function');
		});
	});

	describe('Usage', () => {
		it('should return false when curr value is a string', () => {
			const str = '111111111';

			expect(rule.nodes[0].execute(str)).toBe(false);
		});

		it('should return false when curr a positive float', () => {
			const floatCurr = 1.333;

			expect(rule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return false when curr a negative float', () => {
			const floatCurr = -7.333;

			expect(rule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return true when curr a negative float but invert flag is set', () => {
			const floatCurr = -7.333;
			const customRule = new Rule();
			const customFn = isGreaterThanMake<Rule>(customRule, customRule, {
				invert: true
			});
			customFn(111111);
			expect(customRule.nodes[0].execute(floatCurr)).toBe(true);
		});

		it('should return true when curr a positive integer', () => {
			const intCurr = 7;

			expect(rule.nodes[0].execute(intCurr)).toBe(true);
		});

		it('should return true when curr a negative integer', () => {
			const intCurr = -43;

			expect(rule.nodes[0].execute(intCurr)).toBe(true);
		});

		it('should return false when curr is a boolean, true (non-number)', () => {
			const curr = true;

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is a boolean, false (non-number)', () => {
			const curr = false;

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is an empty array (non-number)', () => {
			expect(rule.nodes[0].execute(EMPTY_ARRAY)).toBe(false);
		});
	});
});
