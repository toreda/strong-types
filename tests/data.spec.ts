import ArmorKVPData from '../src/data';
import ArmorKVPTransformOptions from '../src/transform-options';

const MOCK_INITIAL = 1;
const MOCK_FALLBACK_DEFAULT = 2;
const MOCK_FALLBACK = 33;

describe('ArmorKVPData', () => {
	let instance: ArmorKVPData<number>;

	beforeAll(() => {
		instance = new ArmorKVPData<number>(MOCK_INITIAL, MOCK_FALLBACK_DEFAULT);
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {
		it('should initialize value property to "initial" argument', () => {
			const sampleVal = 43141;

			const custom = new ArmorKVPData<number>(sampleVal, MOCK_FALLBACK_DEFAULT);
			expect(custom.value).toBe(sampleVal);
		});

		it('should initialize fallbackDefault property to "fallbackDefault" argument', () => {
			const sampleVal = 45101;

			const custom = new ArmorKVPData<number>(MOCK_INITIAL, sampleVal);
			expect(custom.fallbackDefault).toBe(sampleVal);
		});

		it('should initialize state property', () => {
			const custom = new ArmorKVPData<number>(MOCK_INITIAL, MOCK_FALLBACK);
			expect(custom).toHaveProperty('state');
		});

		it('should set nullable property true when options.nullable is true', () => {
			const options: ArmorKVPTransformOptions = {
				nullable: true
			};
			const custom = new ArmorKVPData<number>(MOCK_INITIAL, MOCK_FALLBACK, options);
			expect(custom.nullable).toBe(true);
		});

		it('should set nullable property false when options.nullable is false', () => {
			const options: ArmorKVPTransformOptions = {
				nullable: false
			};
			const custom = new ArmorKVPData<number>(MOCK_INITIAL, MOCK_FALLBACK, options);
			expect(custom.nullable).toBe(false);
		});

		it('should set nullable property false when options.nullable is not defined', () => {
			const options: ArmorKVPTransformOptions = {
			};
			const custom = new ArmorKVPData<number>(MOCK_INITIAL, MOCK_FALLBACK, options);
			expect(custom.nullable).toBe(false);
		});

		it('should set nullable property false when options is not defined', () => {
			const custom = new ArmorKVPData<number>(MOCK_INITIAL, MOCK_FALLBACK);
			expect(custom.nullable).toBe(false);
		});
	});

	describe('Implementation', () => {
		describe('get', () => {
			it('should return fallback when value is null', () => {
				expect(instance.value).toBeNull();
				expect(instance.get(MOCK_FALLBACK_DEFAULT)).toBe(MOCK_FALLBACK_DEFAULT);
			});

			it('should return value when value is not null', () => {
				expect(instance.value).toBeNull();
				const sampleVal = 9022;
				instance.set(sampleVal);
				expect(instance.get(MOCK_FALLBACK)).toBe(sampleVal);
			});
		});

		describe('getNullable', () => {
			it('should return value when value is not null', () => {
				const sampleVal =   23210;
				instance.set(sampleVal);
				expect(instance.getNullable()).toBe(sampleVal);
			});

			it('should return null when value is null', () => {
				instance.set(null);
				expect(instance.getNullable()).toBeNull();
			});
		});


		describe('set', () => {
			it('should return false when value argument is undefined', () => {
				expect(instance.set(undefined as any)).toBe(false);
			});

			it('should return true when value argument is valid', () => {
				const sample = 1131;
				expect(instance.set(sample)).toBe(true);
			});


		});

		describe('reset', () => {
			it('should set value to null', () => {
				const sampleVal = 44411;
				instance.set(sampleVal);
				expect(instance.value).toBe(sampleVal);
				instance.reset();
				expect(instance.value).toBeNull();
			});
		});
	});
});
