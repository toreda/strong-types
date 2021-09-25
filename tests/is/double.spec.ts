import {IsDouble, isDoubleMake} from '../../src/is/double';

import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';

describe('Double', () => {
	let mods: RuleMods;
	let rule: Rule;
	let fn: IsDouble<Rule>;

	beforeAll(() => {
		mods = {
			invert: false,
			target: 'value'
		};
		rule = new Rule();
		fn = isDoubleMake<Rule>(rule, rule, mods);
		fn();
	});

	describe('isDoubleMake', () => {
		it('should return a function', () => {
			expect(typeof fn).toBe('function');
		});
	});

	describe('Usage', () => {
		it('should return false when curr is NaN', () => {
			expect(rule.nodes[0].execute(NaN)).toBe(false);
		});

		it('should return false when curr value is a string', () => {
			const str = '111111111';
			expect(rule.nodes[0].execute(str)).toBe(false);
		});

		it('should return true when curr a positive float', () => {
			const floatCurr = 1.333;

			expect(rule.nodes[0].execute(floatCurr)).toBe(true);
		});

		it('should return true when curr is a negative float', () => {
			const floatCurr = -7.333;

			expect(rule.nodes[0].execute(floatCurr)).toBe(true);
		});

		it('should return false when curr is a negative float, but invert flag is active', () => {
			const customRule = new Rule();
			const customFn = isDoubleMake<Rule>(customRule, customRule, {invert: true, target: 'value'});
			customFn();
			const floatCurr = -7.333;

			expect(customRule.nodes[0].execute(floatCurr)).toBe(false);
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
			const curr: string[] = [];
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});
