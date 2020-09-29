import {TBState} from '../src/state';

describe('TBState', () => {
	let instance: TBState<string>;

	beforeAll(() => {
		instance = new TBState<string>();
	});
	describe('Constructor', () => {});

	describe('Implementation', () => {
		describe('create', () => {
			it('should not throw when no options argument provided', () => {
				expect(() => {
					const custom = new TBState<string>();
				}).not.toThrow();
			});
		});
	});
});
