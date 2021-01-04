import {STRule} from '../../src/rule/rule';
import {STRuleModifiers} from '../../src/rule/modifiers';
import {makeIsUrl} from '../../src/validator/is-url';

describe('IsUrl', () => {
	let mods: STRuleModifiers;

	beforeAll(() => {
		mods = {
			invert: false
		};
	});

	describe('valid inputs', () => {
		it('should return true for a url string containing http', () => {
			const rule = new STRule();

			const value = 'http://test.com';

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing Http', () => {
			const rule = new STRule();

			const value = 'Http://somedomain.com';

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing Wss', () => {
			const rule = new STRule();

			const value = 'Wss://somedomain.com:8080';

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a string starting with ftp://', () => {
			const rule = new STRule();

			const value = 'ftp://somedomain.com:3000';

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a string starting with mailto://', () => {
			const rule = new STRule();

			const value = 'mailto://email@email.com';

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a string starting with telnet://', () => {
			const rule = new STRule();

			const value = 'telnet://somedomain.com:3000';

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a string starting with file://', () => {
			const rule = new STRule();

			const value = 'file://somedomain/data';

			const fn = makeIsUrl<STRule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		const inputs = [
			{
				label: 'return false for a string which contains but does not start with https://',
				value: 'test/https://domain.com',
				expectedValue: false
			},
			{
				label: 'return false for a string which contains but does not start with http://',
				value: 'test/http://test.com',
				expectedValue: false
			},
			{
				label: 'return false for a number',
				value: 8,
				expectedValue: false
			},
			{
				label: 'return false for an array',
				value: [] as any,
				expectedValue: false
			},
			{
				label: 'return false for a boolean',
				value: false as any,
				expectedValue: false
			},
			{
				label: 'reject empty object input',
				value: {} as any,
				expectedValue: false
			},
			{
				label: 'return false when value is null',
				value: null as any,
				expectedValue: false
			},
			{
				label: 'return false when value is undefined',
				value: undefined as any,
				expectedValue: false
			},
			{
				label: 'return false for a string which does not start with a scheme',
				value: 'domain.com',
				expectedValue: false
			},
			{
				label: 'return false for a string which starts with a subdomain but has no scheme',
				value: 'www.domain.com',
				expectedValue: false
			}
		];

		for (const input of inputs) {
			it(`should ${input.label}`, () => {
				const rule = new STRule();
				const fn = makeIsUrl<STRule>(rule, rule, mods);
				fn();

				expect(rule.nodes[0].execute(input.value)).toBe(input.expectedValue);
			});
		}
	});
});
