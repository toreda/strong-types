import {ArmorKVPValidators} from '../src/validators';

describe('ArmorKVPValidators', () => {
	let instance: ArmorKVPValidators<string>;

	beforeAll(() => {
		instance = new ArmorKVPValidators<string>();
	});

	describe('Constructor', () => {
		it('should throw when keyType argument is not a string', () => {
			expect(() => {
				const customInstance = new ArmorKVPValidators<string>();
			}).toThrow('ArmorKeyValidators init failed - keyType argument is not a valid string.');
		});
	});

	describe('Implementation', () => {
		describe('validate', () => {});
	});
});
