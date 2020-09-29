import {TBData} from '../src/data';

const MOCK_INITIAL = 1;
const MOCK_FALLBACK_DEFAULT = 2;
const MOCK_FALLBACK = 33;

describe('TBData', () => {
	let instance: TBData<number>;

	beforeAll(() => {
		instance = new TBData<number>(MOCK_INITIAL, MOCK_FALLBACK_DEFAULT);
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {
		it('should initialize value property to "initial" argument', () => {
			const sampleVal = 43141;

			const custom = new TBData<number>(sampleVal, MOCK_FALLBACK_DEFAULT);
			expect(custom.value).toBe(sampleVal);
		});

		it('should initialize fallbackDefault property to "fallbackDefault" argument', () => {
			const sampleVal = 45101;

			const custom = new TBData<number>(MOCK_INITIAL, sampleVal);
			expect(custom.fallbackDefault).toBe(sampleVal);
		});

		it('should initialize state property', () => {
			const custom = new TBData<number>(MOCK_INITIAL, MOCK_FALLBACK);
			expect(custom).toHaveProperty('state');
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
				const sampleVal = 23210;
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
