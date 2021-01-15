import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsPort} from '../../src/validator/is-port';

describe('IsPort', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true when curr a positive integer', () => {
			const rule = new STRule();
			const intCurr = 7;

			const fn = makeIsPort<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(intCurr)).toBe(true);
		});

		it('should return false when curr is invalid integer', () => {
			const rule = new STRule();
			const intCurr = 65355;

			const fn = makeIsPort<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(intCurr)).toBe(false);
		});

		it('should return false when curr value is a string', () => {
			const rule = new STRule();

			const fn = makeIsPort<STRule>(rule, rule, mods);
			fn();

			const str = '111111111';
			expect(rule.nodes[0].execute(str)).toBe(false);
		});

		it('should return false when curr value is empty string', () => {
			const rule = new STRule();

			const fn = makeIsPort<STRule>(rule, rule, mods);
			fn();

			const str = '';
			expect(rule.nodes[0].execute(str)).toBe(false);
		});

		it('should return false when curr a positive float', () => {
			const rule = new STRule();
			const floatCurr = 1.333;

			const fn = makeIsPort<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return false when curr a negative float', () => {
			const rule = new STRule();
			const floatCurr = -7.333;

			const fn = makeIsPort<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(floatCurr)).toBe(false);
		});

		it('should return false when curr a negative Integer', () => {
			const rule = new STRule();
			const intCurr = -43;

			const fn = makeIsPort<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(intCurr)).toBe(false);
		});

		it('should return false when curr is a boolean', () => {
			const rule = new STRule();
			const curr = true;

			const fn = makeIsPort<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is an empty array', () => {
			const rule = new STRule();
			const curr = [];

			const fn = makeIsPort<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});
