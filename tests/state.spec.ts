import {StrongState} from '../src/strong/state';

describe('StrongState', () => {
	let instance: StrongState<string>;

	beforeAll(() => {
		instance = new StrongState<string>();
	});
	describe('Constructor', () => {});

	describe('Implementation', () => {
		describe('create', () => {
			it('should not throw when no options argument provided', () => {
				expect(() => {
					const custom = new StrongState<string>();
				}).not.toThrow();
			});
		});
	});
});
