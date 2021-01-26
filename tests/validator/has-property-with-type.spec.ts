import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeHasPropertyWithType} from '../../src/validator/has-property-with-type';

describe('HasPropertyWithType', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true when the property matches the propName and type of property matches the typeName', () => {
			const rule = new STRule();
			const obj = {age: '50'};
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<STRule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});
	});

	describe('invalid input', () => {
		it('should return false when the object property does not match the propName', () => {
			const rule = new STRule();
			const obj = {number: '50'};
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<STRule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is empty', () => {
			const rule = new STRule();
			const obj = {};
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<STRule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to an empty array', () => {
			const rule = new STRule();
			const obj = [];
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<STRule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to a random string', () => {
			const rule = new STRule();
			const obj = 'age';
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<STRule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to a number', () => {
			const rule = new STRule();
			const obj = 50;
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<STRule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to a boolean', () => {
			const rule = new STRule();
			const obj = false;
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<STRule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when obj is undefined', () => {
			const rule = new STRule();
			const obj = undefined;
			const propName = 'name';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<STRule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when obj is null', () => {
			const rule = new STRule();
			const obj = null;
			const propName = 'breed';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<STRule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});
	});
});
