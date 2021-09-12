import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeHasPropertyWithType} from '../../src/has/property-with-type';

describe('HasPropertyWithType', () => {
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

	describe('Usage', () => {
		it('should return true when the property matches the propName and type of property matches the typeName', () => {
			const obj = {age: '50'};
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});
	});

	describe('invalid input', () => {
		it('should return false when the object property does not match the propName', () => {
			const obj = {number: '50'};
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is empty', () => {
			const obj = {};
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to an empty array', () => {
			const obj: string[] = [];
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to a random string', () => {
			const obj = 'age';
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to a number', () => {
			const obj = 50;
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return true when the object is equal to a boolean', () => {
			const obj = false;
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when obj is undefined', () => {
			const obj = undefined;
			const propName = 'name';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});

		it('should return false when obj is null', () => {
			const obj = null;
			const propName = 'breed';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<Rule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(false);
		});
	});
});
