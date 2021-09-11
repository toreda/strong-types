import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeHasLengthGreaterThan} from '../../src/has/length-greater-than';

describe('LengthGreaterThan', () => {
	let mods: RuleMods;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true when the current length is greater than the target length when the current value is a string', () => {
			const rule = new Rule();
			const target = 5;
			const curr = 'Hello World';
			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the current length is greater than the target length when the current value is an array', () => {
			const rule = new Rule();
			const target = 0;
			const curr = ['dog', 'cat'];
			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});
	});

	describe('invalid ouputs', () => {
		it('should return false when the target length is equal to the current length when the current value is a string', () => {
			const rule = new Rule();
			const target = 3;
			const curr = 'dog';
			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target length is greater than the current length when the current value is a string', () => {
			const rule = new Rule();
			const target = 10;
			const curr = 'number';

			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is an empty string', () => {
			const rule = new Rule();
			const target = 0;
			const curr = '';

			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is an empty string', () => {
			const rule = new Rule();
			const target = '' as any;
			const curr = '1';

			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return true when the target length is equal to the current length when the current value is an array', () => {
			const rule = new Rule();
			const target = 2;
			const curr: string[] = ['dog', 'cat'];
			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target length is greater than the current length when the current value is an array', () => {
			const rule = new Rule();
			const target = 8;
			const curr: string[] = ['one', 'two', 'three'];

			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is an empty array', () => {
			const rule = new Rule();
			const target = 2;
			const curr: string[] = [];

			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is an empty array', () => {
			const rule = new Rule();
			const target = [] as any;
			const curr = [6];

			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is an integer', () => {
			const rule = new Rule();
			const target = 2;
			const curr = 2;

			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is a boolean', () => {
			const rule = new Rule();
			const target = 65;
			const curr = false;

			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is a boolean', () => {
			const rule = new Rule();
			const target = false as any;
			const curr = ['hi'];

			const fn = makeHasLengthGreaterThan<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});
