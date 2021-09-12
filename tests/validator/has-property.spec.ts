import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeHasProperty} from '../../src/has/property';

describe('HasProperty', () => {
	let mods: RuleMods;
	let rule: Rule;

	beforeAll(() => {
		rule = new Rule();
		mods = {
			invert: false
		};
	});

	beforeEach(() => {
		mods.invert = false;
		rule.reset();
	});

	describe('valid input', () => {
		it('should return true when the object property matches the propName', () => {
			const obj = {age: '50'};
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});

		it('should return false when the object does not have property with propName', () => {
			const obj = {number: '50'};
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when target object is empty', () => {
			const obj = {};
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when the object is equal to an empty array', () => {
			const obj: string[] = [];
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when object is equal to a string', () => {
			const obj = 'age';
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when the object is equal to a number', () => {
			const obj = 50;
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when the object is equal to a boolean', () => {
			const obj = true;
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});
	});

	describe('invalid input', () => {
		it('should return false when obj is undefined', () => {
			const obj = undefined;
			const propName = 'name';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when obj is null', () => {
			const obj = null;
			const propName = 'breed';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});
	});
});
