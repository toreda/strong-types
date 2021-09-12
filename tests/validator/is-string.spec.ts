import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsString} from '../../src/is/string';

describe('IsString', () => {
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
		describe('string input', () => {
			it('should return true for an empty string', () => {
				const currentValue = '';

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(true);
			});
		});

		describe('invalid inputs', () => {
			it('should reject empty array input', () => {
				const currentValue = [] as any;

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty object input', () => {
				const currentValue = {} as any;

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject undefined input', () => {
				const currentValue = undefined as any;

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject null input', () => {
				const currentValue = null as any;

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject string array input', () => {
				const currentValue = ['camembert', 'brie', 'cheddar'] as any;

				const fn = makeIsString<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});
		});
	});
});
