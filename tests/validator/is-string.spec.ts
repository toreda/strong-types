import {TBRule} from '../../src/rule/rule';
import {TBRuleModifiers} from '../../src/rule/modifiers';
import {makeIsString} from '../../src/validator/is-string';

describe('IsString', () => {
	let mods: TBRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		describe('string input', () => {
			it('should return true for an empty string', () => {
				const rule = new TBRule();
				const currentValue = '';

				const fn = makeIsString<TBRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(true);
			});
		});

		describe('invalid inputs', () => {
			it('should reject empty array input', () => {
				const rule = new TBRule();
				const currentValue = [] as any;

				const fn = makeIsString<TBRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty object input', () => {
				const rule = new TBRule();
				const currentValue = {} as any;

				const fn = makeIsString<TBRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject undefined input', () => {
				const rule = new TBRule();
				const currentValue = undefined as any;

				const fn = makeIsString<TBRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject null input', () => {
				const rule = new TBRule();
				const currentValue = null as any;

				const fn = makeIsString<TBRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject string array input', () => {
				const rule = new TBRule();
				const currentValue = ['camembert', 'brie', 'cheddar'] as any;

				const fn = makeIsString<TBRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});
		});
	});
});
