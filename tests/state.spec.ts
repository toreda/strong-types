import KVPOptions from '../src/options';
import KVPState from '../src/state';

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
					let result = instance.create();
				}).not.toThrow();
			});
		});


		describe('creatorTransforms', () => {

		});
	});
});
