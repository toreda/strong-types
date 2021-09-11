import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsPort} from '../../src/is/port';

const EMPTY_ARRAY: string[] = [];

describe('IsPort', () => {
	let mods: RuleMods;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true when curr a positive integer', () => {
			const rule = new Rule();
			const intCurr = 7;

			const fn = makeIsPort<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(intCurr)).toBe(true);
		});

		it('should return false when curr is invalid integer', () => {
			const rule = new Rule();
			const intCurr = 65355;

			const fn = makeIsPort<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(intCurr)).toBe(false);
		});

		it('should return false when curr value is a string', () => {
			const rule = new Rule();

			const fn = makeIsPort<Rule>(rule, rule, mods);
			fn();

			const str = '111111111';
			expect(rule.nodes[0].execute(str)).toBe(false);
		});

		it('should return false when curr value is empty string', () => {
			const rule = new Rule();

			const fn = makeIsPort<Rule>(rule, rule, mods);
			fn();

			const str = '';
			expect(rule.nodes[0].execute(str)).toBe(false);
		});

		it('should return false when curr a positive float', () => {
			const rule = new Rule();
			const floatCurr = 1.333;

			const fn = makeIsPort<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return false when curr a negative float', () => {
			const rule = new Rule();
			const floatCurr = -7.333;

			const fn = makeIsPort<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return false when curr a negative Integer', () => {
			const rule = new Rule();
			const intCurr = -43;

			const fn = makeIsPort<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(intCurr)).toBe(false);
		});

		it('should return false when curr is a boolean', () => {
			const rule = new Rule();
			const curr = true;

			const fn = makeIsPort<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is an empty array', () => {
			const rule = new Rule();

			const fn = makeIsPort<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(EMPTY_ARRAY)).toBe(false);
		});
	});
});
