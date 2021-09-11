import {StrongData} from '../src/strong/data';

const MOCK_INITIAL = 1;
const MOCK_FALLBACK_DEFAULT = 2;
const MOCK_FALLBACK = 33;

describe('StrongData', () => {
	let instance: StrongData<number>;

	beforeAll(() => {
		instance = new StrongData<number>(MOCK_FALLBACK_DEFAULT, MOCK_INITIAL);
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {
		it('should initialize value property to "initial" argument', () => {
			const sampleVal = 43141;

			const custom = new StrongData<number>(MOCK_FALLBACK_DEFAULT, sampleVal);
			expect(custom.value).toBe(sampleVal);
		});

		it('should initialize fallbackDefault property to "fallbackDefault" argument', () => {
			const sampleVal = 45101;

			const custom = new StrongData<number>(sampleVal, MOCK_INITIAL);
			expect(custom.fallbackDefault).toBe(sampleVal);
		});

		it('should initialize state property', () => {
			const custom = new StrongData<number>(MOCK_FALLBACK, MOCK_INITIAL);
			expect(custom).toHaveProperty('state');
		});
	});
});
