import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsIpv4Addr} from '../../src/is/ipv4-addr';

describe('IsIpv4Addr', () => {
	let mods: RuleMods;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('Usage', () => {
		describe('valid input', () => {
			it('should return true for a valid ipv4 address', () => {
				const rule = new Rule();
				const currentValue = '127.0.0.1';

				const fn = makeIsIpv4Addr<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(true);
			});
		});

		describe('invalid inputs', () => {
			it('should return false for an ipv4 address with leading zeros', () => {
				const rule = new Rule();
				const currentValue = '0.034.054.212';

				const fn = makeIsIpv4Addr<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should return false for an ipv4 address with invalid values', () => {
				const rule = new Rule();
				const currentValue = '259.134.154.212';

				const fn = makeIsIpv4Addr<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should return false for invalid string value', () => {
				const rule = new Rule();
				const currentValue = '123';

				const fn = makeIsIpv4Addr<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject Ipv4 address array input', () => {
				const rule = new Rule();
				const currentValue = ['255.255.255.255'] as any;

				const fn = makeIsIpv4Addr<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty array input', () => {
				const rule = new Rule();
				const currentValue = [] as any;

				const fn = makeIsIpv4Addr<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject empty object input', () => {
				const rule = new Rule();
				const currentValue = {} as any;

				const fn = makeIsIpv4Addr<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject undefined input', () => {
				const rule = new Rule();
				const currentValue = undefined as any;

				const fn = makeIsIpv4Addr<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject null input', () => {
				const rule = new Rule();
				const currentValue = null as any;

				const fn = makeIsIpv4Addr<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});

			it('should reject boolean input', () => {
				const rule = new Rule();
				const currentValue = false as any;

				const fn = makeIsIpv4Addr<Rule>(rule, rule, mods);
				fn();
				expect(rule.nodes[0].execute(currentValue)).toBe(false);
			});
		});
	});
});
