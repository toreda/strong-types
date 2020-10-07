import {StrongMapParserOptions} from '../../../src/map/parser/options';
import {StrongMapParserState} from '../../../src/map/parser/state';

const EMPTY_OBJECT = {};
const EMPTY_STRING = '';

describe('StrongMapParserState', () => {
	let instance: StrongMapParserState;

	beforeAll(() => {
		instance = new StrongMapParserState();
	});

	describe('Constructor', () => {
		it('should not throw when options argument is missing', () => {
			expect(() => {
				const state = new StrongMapParserState();
			}).not.toThrow();
		});

		it('should not throw when options argument is an empty object', () => {
			expect(() => {
				const state = new StrongMapParserState(EMPTY_OBJECT);
			}).not.toThrow();
		});

		it('should not throw when options argument is null', () => {
			expect(() => {
				const state = new StrongMapParserState(null as any);
			}).not.toThrow();
		});

		it('should not throw when options argument is a undefined', () => {
			expect(() => {
				const state = new StrongMapParserState(undefined as any);
			}).not.toThrow();
		});

		it('should not throw when options argument is an empty string', () => {
			expect(() => {
				const state = new StrongMapParserState(EMPTY_STRING);
			}).not.toThrow();
		});
	});
});
