import {Id, idMake} from '../src/id';
const EMPTY_STRING = '';

describe('Id', () => {
	let id: Id;

	beforeAll(() => {
		id = idMake('');
	});

	beforeEach(() => {
		id.reset();
	});

	describe('Values', () => {
		it(`should set value when input is an empty string`, () => {
			id('aaaa');
			expect(id()).toBe('aaaa');
			id(EMPTY_STRING);
			expect(id()).toBe(EMPTY_STRING);
		});

		it(`should set string when no min or max lengths are set`, () => {
			const value = 'a97141197149174194714101947149174';
			id(value);
			expect(id()).toBe(value);
		});

		it(`should set value when input length is exactly equal to min length`, () => {
			const sampleId = idMake('a', null, {minLength: 5});
			expect(sampleId()).toBe('a');
			const input = 'aaaaa';
			sampleId(input);
			expect(sampleId()).toBe(input);
		});

		it(`should set value when input length is exactly equal to max length`, () => {
			const sampleId = idMake('b', null, {maxLength: 10});
			expect(sampleId()).toBe('b');
			const input = 'aaaaaaaaaa';
			sampleId(input);
			expect(sampleId()).toBe(input);
		});

		it(`should set value when input length is between min and max length`, () => {
			const sampleId = idMake('a', null, {minLength: 5, maxLength: 8});
			expect(sampleId()).toBe('a');
			const input = 'a913475';
			sampleId(input);
			expect(sampleId()).toBe(input);
		});

		it(`should not set value when input length is less than min length`, () => {
			const defaultValue = 'd1234567';
			const sampleId = idMake(defaultValue, null, {minLength: 6});
			expect(sampleId()).toBe(defaultValue);
			const input = 'abaa';
			sampleId(input);
			expect(sampleId()).toBe(defaultValue);
		});
	});

	describe('Reset', () => {
		it(`should reset to initial value`, () => {
			const initial = 'A971497141';
			const custom = idMake(initial);
			custom('aaa');
			expect(custom()).toBe('aaa');
			custom.reset();
			expect(custom()).toBe(initial);
		});
	});
});
