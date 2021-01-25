import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeHasPropertyWithType} from '../../src/validator/has-property-with-type';

describe('HasProperty', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		it('should return true when input is an empty array', () => {
			const rule = new STRule();
			const obj = {age: '50'};
			const propName = 'age';
			const typeName = 'string';

			const fn = makeHasPropertyWithType<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(obj)).toBe(true);
		});
	});
});
