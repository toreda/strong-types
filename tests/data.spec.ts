import {STData} from '../src/data';

const MOCK_INITIAL = 1;
const MOCK_FALLBACK_DEFAULT = 2;
const MOCK_FALLBACK = 33;

describe('STData', () => {
	let instance: STData<number>;

	beforeAll(() => {
		instance = new STData<number>(MOCK_INITIAL, MOCK_FALLBACK_DEFAULT);
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {
		it('should initialize value property to "initial" argument', () => {
			const sampleVal = 43141;

			const custom = new STData<number>(sampleVal, MOCK_FALLBACK_DEFAULT);
			expect(custom.value).toBe(sampleVal);
		});

		it('should initialize fallbackDefault property to "fallbackDefault" argument', () => {
			const sampleVal = 45101;

			const custom = new STData<number>(MOCK_INITIAL, sampleVal);
			expect(custom.fallbackDefault).toBe(sampleVal);
		});

		it('should initialize state property', () => {
			const custom = new STData<number>(MOCK_INITIAL, MOCK_FALLBACK);
			expect(custom).toHaveProperty('state');
		});
	});
});
