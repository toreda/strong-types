import {KVPState} from '../src/state';

describe('KVPState', () => {
	let instance: KVPState<string>;

	beforeAll(() => {
		instance = new KVPState<string>();
	});

	describe('Constructor', () => {});

	describe('Implementation', () => {
		describe('create', () => {
			it('should not throw when no options argument provided', () => {
				expect(() => {
					const custom = new KVPState<string>();
				}).not.toThrow();
			});
		});
	});
});
