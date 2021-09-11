import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsString} from '../../src/is/string';

describe('IsString', () => {
	let mods: RuleMods;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		describe('string input', () => {
			it('should return true for an empty string', () => {
				const rule = new Rule();
				const currentValue = '';

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(true);
			});
		});

		describe('invalid inputs', () => {
			it('should reject empty array input', () => {
				const rule = new Rule();
				const currentValue = [] as any;

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty object input', () => {
				const rule = new Rule();
				const currentValue = {} as any;

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject undefined input', () => {
				const rule = new Rule();
				const currentValue = undefined as any;

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject null input', () => {
				const rule = new Rule();
				const currentValue = null as any;

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject string array input', () => {
				const rule = new Rule();
				const currentValue = ['camembert', 'brie', 'cheddar'] as any;

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});
		});
	});
});
