import {IsIpv4Addr, isIpv4AddrMake} from '../../src/is/ipv4-addr';

import {Rule} from '../../src/rule';

describe('IsIpv4Addr', () => {
	let rule: Rule;
	let fn: IsIpv4Addr<Rule>;

	beforeAll(() => {
		rule = new Rule();
		fn = isIpv4AddrMake<Rule>(rule, rule, {invert: false, target: 'value'});
		fn();
	});

	describe('Usage', () => {
		describe('valid input', () => {
			it('should return true for a valid ipv4 address', () => {
				const currentValue = '127.0.0.1';

				expect(rule.nodes[0].execute(currentValue)).toBe(true);
			});
		});

		describe('invalid inputs', () => {
			it('should return false for an ipv4 address with leading zeros', () => {
				const currentValue = '0.034.054.212';

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should return false for an ipv4 address with invalid values', () => {
				const currentValue = '259.134.154.212';

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should return false for invalid string value', () => {
				const currentValue = '123';

				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject Ipv4 address array input', () => {
				const currentValue = ['255.255.255.255'] as any;

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
