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
		it('should return true when ', () => {
			const rule = new STRule();
			const curr = Person as any;
			const propName = 'age';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(curr)).toBe(true);
		});
	});

	describe('invalid input', () => {
		it('should return false when curr is undefined', () => {
			const rule = new STRule();
			const curr = undefined;
			const propName = 'name';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});

		it('should return false when curr is null', () => {
			const rule = new STRule();
			const curr = null;
			const propName = 'breed';

			const fn = makeHasProperty<STRule>(rule, rule, mods);
			fn(propName);
			expect(rule.nodes[0].execute(curr)).toBe(false);
		});
	});
});
