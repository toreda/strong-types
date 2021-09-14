import {httpMethodSupported} from '../../../src/http/method/supported';
import {httpMethods} from '../../../src/http/methods';
const METHODS = httpMethods.keys();

describe('httpMethods', () => {
	it(`should be a function`, () => {
		expect(typeof httpMethodSupported).toBe('function');
	});

	it(`should return false when method arg is undefined`, () => {
		expect(httpMethodSupported(undefined)).toBe(false);
	});

	it(`should return false when method arg is null`, () => {
		expect(httpMethodSupported(null)).toBe(false);
	});

	it(`should return false when method arg is a truthy non-string`, () => {
		expect(httpMethodSupported(1114 as any)).toBe(false);
	});

	for (const method of METHODS) {
		it(`should support method in method set '${method}'`, () => {
			expect(httpMethodSupported(method)).toBe(true);
		});
	}
});
