import {IsEmail, makeIsEmail} from '../../src/is/email';

import {Rule} from '../../src/rule';
import {TLDS} from '../_data/tlds';

describe('IsEmail', () => {
	let rule: Rule;
	let fn: IsEmail<Rule>;

	beforeAll(() => {
		rule = new Rule();

		fn = makeIsEmail<Rule>(rule, rule, {invert: false});
		fn();
	});

	describe('Usage', () => {
		for (const tld of TLDS) {
			it(`should return true for email address with valid TLD '.${tld}'`, () => {
				const value = `testemail@somedomain.${tld}`;
				expect(rule.nodes[0].execute(value)).toBe(true);
			});
		}
	});

	describe('invalid inputs', () => {
		it('should return false for a string', () => {
			const value = 'test com';

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a number', () => {
			const value = 8;
			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for an array', () => {
			const value = [] as any;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false for a boolean', () => {
			const value = false as any;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should reject empty object input', () => {
			const value = {} as any;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is null', () => {
			const value = null as any;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});

		it('should return false when value is undefined', () => {
			const value = undefined as any;

			expect(rule.nodes[0].execute(value)).toBe(false);
		});
	});
});
