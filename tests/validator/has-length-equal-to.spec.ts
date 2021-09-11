import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeHasLengthEqualTo} from '../../src/has/length-equal-to';

describe('LengthEqualTo', () => {
	let mods: RuleMods;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true when the target length is equal to the current length when the current value is a string', () => {
			const rule = new Rule();
			const target = 3;
			const curr = 'dog';
			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the target length is equal to the current length when the current value is an array', () => {
			const rule = new Rule();
			const target = 2;
			const curr: string[] = ['dog', 'cat'];
			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the current value and target value are equal', () => {
			const rule = new Rule();
			const target = 0;
			const curr = '';

			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});

		it('should return true when the target and the curr values are equal', () => {
			const rule = new Rule();
			const target = 0;
			const curr: string[] = [];

			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});
	});

	describe('invalid ouputs', () => {
		it('should return false when the target length does not equal the current length when the current value is a string', () => {
			const rule = new Rule();
			const target = 4;
			const curr = 'number';

			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is an empty string', () => {
			const rule = new Rule();
			const target = '' as any;
			const curr = '1';

			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target length does not equal the current length when the current value is an array', () => {
			const rule = new Rule();
			const target = 2;
			const curr = ['one', 'two', 'three'];

			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is an empty array', () => {
			const rule = new Rule();
			const target = 2;
			const curr: string[] = [];

			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is an empty array', () => {
			const rule = new Rule();
			const target = [] as any;
			const curr = [6];

			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is an integer', () => {
			const rule = new Rule();
			const target = 2;
			const curr = 2;

			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the current value is a boolean', () => {
			const rule = new Rule();
			const target = 65;
			const curr = false;

			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when the target value is a boolean', () => {
			const rule = new Rule();
			const target = false as any;
			const curr = ['hello'];

			const fn = makeHasLengthEqualTo<Rule>(rule, rule, mods);
			fn(target);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});
