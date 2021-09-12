import {Rule} from '../../src/rule';
import {RuleMods} from '../../src/rule/mods';
import {makeIsUrl} from '../../src/is/url';

describe('IsUrl', () => {
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

	describe('valid inputs', () => {
		it('should return true for a url string containing http', () => {
			const value = 'http://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing Http', () => {
			const value = 'Http://somedomain.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing Wss', () => {
			const value = 'Wss://somedomain.com:8080';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url starting with ftp://', () => {
			const value = 'ftp://somedomain.com:3000';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url starting with mailto://', () => {
			const value = 'mailto://email@email.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url starting with telnet://', () => {
			const value = 'telnet://somedomain.com:3000';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url starting with file://', () => {
			const value = 'file://somedomain/data';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for the following url structure', () => {
			const value = 'http://www.test.com:81/a/b/c.html?user=Alice&year=2008#p2';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for the following url structure', () => {
			const value = 'http://www.test.com/showOrder.php?order=4621047';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for the following url structure', () => {
			const value = 'http://host.test.com/companyInfo?name=C&H Sugar';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for the following url structure', () => {
			const value = 'http://host.company.com/showCompanyInfo?name=C%26H%20Sugar';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing ftp', () => {
			const value = 'ftp://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing gopher', () => {
			const value = 'gopher://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing mailto', () => {
			const value = 'mailto://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing mid', () => {
			const value = 'mid://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing news', () => {
			const value = 'news://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing nntp', () => {
			const value = 'nntp://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing prospero', () => {
			const value = 'prospero://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing telnet', () => {
			const value = 'telnet://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing tn3270', () => {
			const value = 'tn3270://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing rlogin', () => {
			const value = 'rlogin://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a url string containing wais', () => {
			const value = 'wais://test.com';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});

		it('should return true for a valid url string ', () => {
			const value = 'http://username:password@example.com/';

			const fn = makeIsUrl<Rule>(rule, rule, mods);
			fn();

			expect(rule.nodes[0].execute(value)).toBe(true);
		});
	});

	describe('invalid inputs', () => {
		const inputs = [
			{
				label: 'return false for an invalid url which contains but does not start with https://',
				value: 'test/https://domain.com',
				expectedValue: false
			},
			{
				label: 'return false for an invalid url which contains but does not start with http://',
				value: 'test/http://test.com',
				expectedValue: false
			},
			{
				label: 'return false for an invalid url which contains but does not start with ftps://',
				value: 'test/ftps://domain.com',
				expectedValue: false
			},
			{
				label: 'return false for an invalid url that starts with a symbol',
				value: '@ftps://3/5/domain.com',
				expectedValue: false
			},
			{
				label: 'return false for an invalid url that starts with a number',
				value: '8ftps://3/5/domain.com',
				expectedValue: false
			},
			{
				label: 'return false for an invalid url with a partial scheme',
				value: '://3/5/domain.com',
				expectedValue: false
			},
			{
				label: 'return false for an invalid url missing the scheme',
				value: 'domain.com',
				expectedValue: false
			},
			{
				label: 'return false for an invalid url missing a domain',
				value: 'http://',
				expectedValue: false
			},
			{
				label: 'return false for an invalid url missing :// from the scheme',
				value: 'httphost.company.com/showCompanyInfo?name=C%26H%20Sugar',
				expectedValue: false
			},
			{
				label: 'return false for an invalid url which contains but does not start with http://',
				value: 'username:password@example.com/http://',
				expectedValue: false
			},
			{
				label: 'return false for an invalid url which contains but does not start with https://',
				value: 'username:password@example.com/https://',
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
				const fn = makeIsUrl<Rule>(rule, rule, mods);
				fn();

				expect(rule.nodes[0].execute(input.value)).toBe(input.expectedValue);
			});
		}
	});
});
