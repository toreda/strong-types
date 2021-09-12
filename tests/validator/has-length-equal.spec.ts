import {HasLengthEqual, makeHasLengthEqual} from '../../src/has/length-equal';

import {Rule} from '../../src/rule';

describe('HasLengthEqualTo', () => {
	let rule: Rule;
	let fn: HasLengthEqual<Rule>;

	beforeAll(() => {
		rule = new Rule();
	});

	beforeEach(() => {
		rule.reset();
	});

	describe('Usage', () => {
		it('should return true when target length is equal to the current length when the current value is a string', () => {
			const target = 3;
			const curr = 'dog';
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the target length is equal to the current length when the current value is an array', () => {
			const target = 2;
			const curr: string[] = ['dog', 'cat'];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the current value and target value are equal', () => {
			const target = 0;
			const curr = '';
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the target and curr values are equal', () => {
			const target = 0;
			const curr: string[] = [];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});
	});

	describe('invalid ouputs', () => {
		it('should return false when the target length does not equal the current length when the current value is a string', () => {
			const target = 4;
			const curr = 'number';

			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});
			fn(3);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is an empty string', () => {
			const target = '' as any;
			const curr = '1';

			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});
			fn(10);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target length does not equal the current length when the current value is an array', () => {
			const target = 2;
			const curr = ['one', 'two', 'three'];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is an empty array', () => {
			const target = 2;
			const curr: string[] = [];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is an empty array', () => {
			const target = [] as any;
			const curr = [6];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is an integer', () => {
			const target = 2;
			const curr = 2;
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is a boolean', () => {
			const target = 65;
			const curr = false;
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is a boolean', () => {
			const target = false as any;
			const curr = ['hello'];
			const fn = makeHasLengthEqual<Rule>(rule, rule, {invert: false});

			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});
