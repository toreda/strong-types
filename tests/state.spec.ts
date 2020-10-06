import {STState} from '../src/state';

describe('STState', () => {
	let instance: STState<string>;

	beforeAll(() => {
		instance = new STState<string>();
	});
	describe('Constructor', () => {});

	describe('Implementation', () => {
		describe('create', () => {
			it('should not throw when no options argument provided', () => {
				expect(() => {
					const custom = new STState<string>();
				}).not.toThrow();
			});
		});
	});
});
