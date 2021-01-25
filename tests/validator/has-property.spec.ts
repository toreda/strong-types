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
		it('should return true when object equals the propName ', () => {
			const rule = new STRule();
			const obj = {age: '50'};
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
