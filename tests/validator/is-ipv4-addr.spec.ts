import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsIpv4Addr} from '../../src/validator/is-ipv4-addr';

describe('IsIpv4Addr', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		describe('valid input', () => {
			it('should return true for a valid ipv4 address', () => {
				const rule = new STRule();
				const currentValue = '127.0.0.1';

				const fn = makeIsIpv4Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(true);
			});
		});

		describe('invalid inputs', () => {
			it('should return false for an ipv4 address with leading zeros', () => {
				const rule = new STRule();
				const currentValue = '0.034.054.212';

				const fn = makeIsIpv4Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should return false for an ipv4 address with invalid values', () => {
				const rule = new STRule();
				const currentValue = '259.134.154.212';

				const fn = makeIsIpv4Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should return false for invalid string value', () => {
				const rule = new STRule();
				const currentValue = '123';

				const fn = makeIsIpv4Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject Ipv4 address array input', () => {
				const rule = new STRule();
				const currentValue = ['255.255.255.255'] as any;

				const fn = makeIsIpv4Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty array input', () => {
				const rule = new STRule();
				const currentValue = [] as any;

				const fn = makeIsIpv4Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty object input', () => {
				const rule = new STRule();
				const currentValue = {} as any;

				const fn = makeIsIpv4Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject undefined input', () => {
				const rule = new STRule();
				const currentValue = undefined as any;

				const fn = makeIsIpv4Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject null input', () => {
				const rule = new STRule();
				const currentValue = null as any;

				const fn = makeIsIpv4Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject boolean input', () => {
				const rule = new STRule();
				const currentValue = false as any;

				const fn = makeIsIpv4Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});
		});
	});
});
