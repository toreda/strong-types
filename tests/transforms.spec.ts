import {ArmorKVPTransform} from '../src/transform';
import {ArmorKVPTransforms} from '../src/transforms';

const MOCK_STRING = 'oneoneone';

describe('ArmorKVPTransforms', () => {
	let instance: ArmorKVPTransforms<string>;

	beforeAll(() => {
		instance = new ArmorKVPTransforms<string>(MOCK_STRING);
	});

	describe('Constructor', () => {
		it('shall pass', () => {});
	});

	describe('Implementation', () => {
		describe('add', () => {
			let custom: ArmorKVPTransforms<string>;
			const MOCK_FALLBACK1 = '22222233333___11';

			beforeEach(() => {
				custom = new ArmorKVPTransforms<string>(MOCK_FALLBACK1);
			});

			it('should return false when transform argument is null', () => {
				expect(custom.add(null as any)).toBe(false);
			});

			it('should return false when transform argument is undefined', () => {
				expect(custom.add(undefined as any)).toBe(false);
			});
		});

		describe('addNullable', () => {
			let custom: ArmorKVPTransforms<string>;
			const MOCK_FALLBACK1 = '22222233333___11';

			beforeEach(() => {
				custom = new ArmorKVPTransforms<string>(MOCK_FALLBACK1);
			});

			it('should return false when transform argument is null', () => {
				expect(custom.addNullable(null as any)).toBe(false);
			});

			it('should return false when transform argument is undefined', () => {
				expect(custom.addNullable(undefined as any)).toBe(false);
			});
		});

		describe('run', () => {
			let custom: ArmorKVPTransforms<string>;
			const MOCK_FALLBACK1 = '22222233333___11';
			beforeEach(() => {
				custom = new ArmorKVPTransforms<string>(MOCK_FALLBACK1);
			});

			it('should return fallback default when value argument is null', () => {
				expect(custom.run(null as any)).toBe(MOCK_FALLBACK1);
			});

			it('should return fallback default when value argument is undefined', () => {
				expect(custom.run(undefined as any)).toBe(MOCK_FALLBACK1);
			});

			it('should return value argument when no transforms are applied', () => {
				const inputValue = 'one_one_two';
				expect(custom.transforms).toHaveLength(0);
				expect(custom.run(inputValue)).toBe(inputValue);
			});

			it('should execute all transforms', () => {
				const tf1 = jest.fn();
				tf1.mockImplementation((val: string) => {
					return val;
				});
				const transform1 = new ArmorKVPTransform(tf1);

				const tf2 = jest.fn();
				tf1.mockImplementation((val: string) => {
					return val;
				});
				const transform2 = new ArmorKVPTransform(tf2);
				const tf3 = jest.fn();
				tf3.mockImplementation((val: string) => {
					return val;
				});
				const transform3 = new ArmorKVPTransform(tf3);

				custom.add(transform1);
				custom.add(transform2);
				custom.add(transform3);

				expect(tf1).not.toHaveBeenCalled();
				expect(tf2).not.toHaveBeenCalled();
				expect(tf3).not.toHaveBeenCalled();

				const val = 'aaaaaaaaaa4414';
				const result = custom.run(val);

				expect(tf1).toHaveBeenCalledTimes(1);
				expect(tf2).toHaveBeenCalledTimes(1);
				expect(tf3).toHaveBeenCalledTimes(1);
			});
		});

		describe('runNullable', () => {
			let custom: ArmorKVPTransforms<string>;
			const MOCK_FALLBACK1 = '22222233333___11';
			beforeEach(() => {
				custom = new ArmorKVPTransforms<string>(MOCK_FALLBACK1);
			});

			it('should return null when value argument is null', () => {
				expect(custom.runNullable(null as any)).toBeNull();
			});

			it('should return null when value argument is undefined', () => {
				expect(custom.runNullable(undefined as any)).toBeNull();
			});

			it('should return value argument when no transforms are applied', () => {
				const inputValue = 'one_one_two';
				expect(custom.transforms).toHaveLength(0);
				expect(custom.runNullable(inputValue)).toBe(inputValue);
			});
		});
	});
});
