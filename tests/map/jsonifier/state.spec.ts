import {StrongMapJsonifierState as State} from 'src/map/jsonifier/state';

const EMPTY_OBJECT = {};
const EMPTY_STRING = '';

describe('StrongMapJsonifierState', () => {
	let instance: State;

	beforeAll(() => {
		instance = new State();
	});

	describe('Constructor', () => {
		it('should not throw when options argument is missing', () => {
			expect(() => {
				const state = new State();
			}).not.toThrow();
		});

		it('should not throw when options argument is an empty object', () => {
			expect(() => {
				const state = new State(EMPTY_OBJECT);
			}).not.toThrow();
		});

		it('should not throw when options argument is null', () => {
			expect(() => {
				const state = new State(null as any);
			}).not.toThrow();
		});

		it('should not throw when options argument is a undefined', () => {
			expect(() => {
				const state = new State(undefined as any);
			}).not.toThrow();
		});

		it('should not throw when options argument is an empty string', () => {
			expect(() => {
				const state = new State(EMPTY_STRING);
			}).not.toThrow();
		});
	});
});
