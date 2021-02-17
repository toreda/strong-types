import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeHasLengthLessThanOrEqualTo} from '../../src/validator/has-length-less-than-or-equal-to';

describe('LengthLessThanOrEqualTo', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true when the target length is equal to the current length when the current value is a string', () => {
			const rule = new STRule();
			const target = 3;
			const curr = 'dog';
			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the current length is less than the target length when the current value is a string', () => {
			const rule = new STRule();
			const target = 5;
			const curr = '6';
			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the target length is equal to the current length when the current value is an array', () => {
			const rule = new STRule();
			const target = 2;
			const curr = ['dog', 'cat'];
			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the current length is less than the target length when the current value is an array', () => {
			const rule = new STRule();
			const target = 6;
			const curr = ['dog', 'cat'];
			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the current value is is less than or equal to the target value', () => {
			const rule = new STRule();
			const target = 0;
			const curr = '';

			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the current value is is less than or equal to the target value', () => {
			const rule = new STRule();
			const target = 2;
			const curr = [];

			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});
	});

	describe('invalid ouputs', () => {
		it('should return false when the target length is less than the current length when the current value is a string', () => {
			const rule = new STRule();
			const target = 0;
			const curr = 'number';

			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is an empty string', () => {
			const rule = new STRule();
			const target = '' as any;
			const curr = '1';

			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target length is less than the current length when the current value is an array', () => {
			const rule = new STRule();
			const target = 2;
			const curr = ['one', 'two', 'three'];

			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is an empty array', () => {
			const rule = new STRule();
			const target = [] as any;
			const curr = [6];

			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is an integer', () => {
			const rule = new STRule();
			const target = 2;
			const curr = 2;

			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is a boolean', () => {
			const rule = new STRule();
			const target = 65;
			const curr = false;

			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is a boolean', () => {
			const rule = new STRule();
			const target = false as any;
			const curr = ['hi'];

			const fn = makeHasLengthLessThanOrEqualTo<STRule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});
