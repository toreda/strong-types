import {IsIpv6Addr, makeIsIpv6Addr} from '../../src/is/ipv6-addr';

import {Rule} from '../../src/rule';

describe('IsIpv6Addr', () => {
	let rule: Rule;
	let fn: IsIpv6Addr<Rule>;

	beforeAll(() => {
		rule = new Rule();

		fn = makeIsIpv6Addr<Rule>(rule, rule, {invert: false});
		fn();
	});

	describe('Usage', () => {
		describe('valid input', () => {
			it('should return true for full valid ipv6 address', () => {
				const currentValue = '74dc:a100:007a:34Hd:0043:ab32:0000:ffff';

				expect(rule.nodes[0].execute(currentValue)).toBe(true);
			});

			it('should return true for valid ipv6 address containing one double colon', () => {
				const currentValue = '74dc:a100:007a::02ba';

				expect(rule.nodes[0].execute(currentValue)).toBe(true);
			});
		});

		describe('invalid inputs', () => {
			it('should return false for ipv6 address containing one double colon', () => {
				const currentValue = '74dc:a100:007A::34hd:0043:ab32:0000:ffff';

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should return false for ipv6 address containing more than one double colon', () => {
				const currentValue = '74dc::a100::02ba';

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject Ipv6 address array input', () => {
				const currentValue = ['74dc:a100::02ba'] as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty array input', () => {
				const currentValue = [] as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty object input', () => {
				const currentValue = {} as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject undefined input', () => {
				const currentValue = undefined as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject null input', () => {
				const currentValue = null as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject boolean input', () => {
				const currentValue = false as any;

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});
		});
	});
});
