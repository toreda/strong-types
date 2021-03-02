import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeHasProperty} from '../../src/validator/has-property';

describe('HasProperty', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('valid input', () => {
		it('should return true when the object property matches the propName', () => {
			const rule = new STRule();
			const obj = {age: '50'};
			const propName = 'age';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});

		it('should return true when the object property does not match the propName', () => {
			const rule = new STRule();
			const obj = {number: '50'};
			const propName = 'age';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});

		it('should return true when the object is empty', () => {
			const rule = new STRule();
			const obj = {};
			const propName = 'age';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});

		it('should return true when the object is equal to an empty array', () => {
			const rule = new STRule();
			const obj = [];
			const propName = 'age';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});

		it('should return true when the object is equal to a string', () => {
			const rule = new STRule();
			const obj = 'age';
			const propName = 'age';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});

		it('should return true when the object is equal to a number', () => {
			const rule = new STRule();
			const obj = 50;
			const propName = 'age';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});

		it('should return true when the object is equal to a boolean', () => {
			const rule = new STRule();
			const obj = true;
			const propName = 'age';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});
	});

	describe('invalid input', () => {
		it('should return false when obj is undefined', () => {
			const rule = new STRule();
			const obj = undefined;
			const propName = 'name';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when obj is null', () => {
			const rule = new STRule();
			const obj = null;
			const propName = 'breed';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});
	});
});
