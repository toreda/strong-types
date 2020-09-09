import ArmorKVP from '../src/kvp';
import ArmorKVPValidator from '../src/validator';
import ArmorKVPValidatorFn from '../src/validator-fn';

const MOCK_INPUT = 'AFA2224091094';
describe('ArmorKVPValidator', () => {
	describe('Constructor', () => {
		it('should throw when validator-fn argument is a non-function (null)', () => {
			expect(() => {
				const validator = new ArmorKVPValidator<string>(null as any);
			}).toThrow('ArmorKVPValidator init failed - validator argument is missing.');
		});

		it('should throw when validator-fn argument is  a non-function (undefined)', () => {
			expect(() => {
				const validator = new ArmorKVPValidator<string>(undefined as any);
			}).toThrow('ArmorKVPValidator init failed - validator argument is missing.');
		});

		it('should throw when validator-fn argument is a non-function (string)', () => {
			const sampleStr = '1110924AAA';
			expect(() => {
				const validator = new ArmorKVPValidator<string>(sampleStr as any);
			}).toThrow('ArmorKVPValidator init failed - validator argument is not a callable validator fn.');
		});

		it('should not throw when validator-fn argument is a validator-fn', () => {
			expect(() => {
				const fn: ArmorKVPValidatorFn<string> = (val: string | null): boolean => {
					return true;
				};
				const validator = new ArmorKVPValidator<string>(fn);
			}).not.toThrow();
		});

		it('should set validator property to the validator-fn argument', () => {
			const fn: ArmorKVPValidatorFn<string> = (val: string | null): boolean => {
				return true;
			};
			const validator = new ArmorKVPValidator<string>(fn);
			expect(validator.validator).toBe(fn);
		});
	});

	describe('Implementation', () => {
		let sampleFnFalse: ArmorKVPValidatorFn<string>;
		let sampleFnTrue: ArmorKVPValidatorFn<string>;

		beforeAll(() => {
			sampleFnTrue = (val: string | null): boolean => {
				return true;
			};

			sampleFnFalse = (val: string | null): boolean => {
				return false;
			};
		});

		describe('run', () => {
			it('should return false when wrapped validator fn returns false', () => {
				const validator = new ArmorKVPValidator<string>(sampleFnFalse);
				expect(validator.run(MOCK_INPUT)).toBe(false);
			});
			it('should return true when wrapped validator fn returns true', () => {
				const validator = new ArmorKVPValidator<string>(sampleFnTrue);
				expect(validator.run(MOCK_INPUT)).toBe(true);
			});

			it('should return false when validator fn throws', () => {
				const fnThrow: ArmorKVPValidatorFn<string> = (val: string | null) => {
					throw new Error('Mock throw');
				};
				const validator = new ArmorKVPValidator<string>(fnThrow);
				expect(validator.run(MOCK_INPUT)).toBe(false);
			});

		});
	});
});
