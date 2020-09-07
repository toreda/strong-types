import { ArmorKVPTransforms } from '../src/transforms';

const MOCK_STRING = 'oneoneone';

describe('ArmorKVPTransforms', () => {
	let instance: ArmorKVPTransforms<string>;

	beforeAll(() => {
		instance = new ArmorKVPTransforms<string>(MOCK_STRING);
	});

	describe('Constructor', () => {
		it('shall pass', () => {

		});
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
