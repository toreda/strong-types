import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeHasProperty} from '../../src/has/property';

describe('HasProperty', () => {
	let mods: RuleMods;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('valid input', () => {
		it('should return true when the object property matches the propName', () => {
			const rule = new Rule();
			const obj = {age: '50'};
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});

		it('should return false when the object does not have property with propName', () => {
			const rule = new Rule();
			const obj = {number: '50'};
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when target object is empty', () => {
			const rule = new Rule();
			const obj = {};
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when the object is equal to an empty array', () => {
			const rule = new Rule();
			const obj: string[] = [];
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when object is equal to a string', () => {
			const rule = new Rule();
			const obj = 'age';
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when the object is equal to a number', () => {
			const rule = new Rule();
			const obj = 50;
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when the object is equal to a boolean', () => {
			const rule = new Rule();
			const obj = true;
			const propName = 'age';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});
	});

	describe('invalid input', () => {
		it('should return false when obj is undefined', () => {
			const rule = new Rule();
			const obj = undefined;
			const propName = 'name';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when obj is null', () => {
			const rule = new Rule();
			const obj = null;
			const propName = 'breed';

			const fn = makeHasProperty<Rule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});
	});
});
