import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsIpv6Addr} from '../../src/validator/is-ipv6-addr';

describe('IsIpv6Addr', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		describe('valid input', () => {
			it('should return true for full valid ipv6 address', () => {
				const rule = new STRule();
				const currentValue = '74dc:a100:007a:34hd:0043:ab32:0000:ffff ';

				const fn = makeIsIpv6Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(true);
			});

			it('should return true for valid ipv6 address', () => {
				const rule = new STRule();
				const currentValue = '74dc:a100:007a::02ba ';

				const fn = makeIsIpv6Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(true);
			});
		});

		describe('invalid inputs', () => {
			it('should return false for invalid ipv6 address containg more than one double semicolon', () => {
				const rule = new STRule();
				const currentValue = '74dc::a100::02ba';

				const fn = makeIsIpv6Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should return false for invalid ipv6 address containing string', () => {
				const rule = new STRule();
				const currentValue = '74dc:a100:007a:hello:02ba';

				const fn = makeIsIpv6Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should return false for invalid string value', () => {
				const rule = new STRule();
				const currentValue = '123';

				const fn = makeIsIpv6Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject Ipv6 address array input', () => {
				const rule = new STRule();
				const currentValue = ['74dc:a100::02ba'] as any;

				const fn = makeIsIpv6Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty array input', () => {
				const rule = new STRule();
				const currentValue = [] as any;

				const fn = makeIsIpv6Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty object input', () => {
				const rule = new STRule();
				const currentValue = {} as any;

				const fn = makeIsIpv6Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject undefined input', () => {
				const rule = new STRule();
				const currentValue = undefined as any;

				const fn = makeIsIpv6Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject null input', () => {
				const rule = new STRule();
				const currentValue = null as any;

				const fn = makeIsIpv6Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject boolean input', () => {
				const rule = new STRule();
				const currentValue = false as any;

				const fn = makeIsIpv6Addr<STRule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});
		});
	});
});
