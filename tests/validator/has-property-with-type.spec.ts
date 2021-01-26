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
		it('should return true when typeName matches the property type and when object matches the propName  ', () => {
			const rule = new STRule();
			const obj = {age: '50'};
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<STRule>(rule, rule, mods);
			fn(propName, typeName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});
	});
});
