import KVP from '../src/kvp';
import KVPValidator from '../src/validator';
import KVPValidatorFn from '../src/validator-fn';

const MOCK_INPUT = 'AFA2224091094';
describe('KVPValidator', () => {
	describe('Constructor', () => {
		it('should throw when validator-fn argument is a non-function (null)', () => {
			expect(() => {
				const validator = new KVPValidator<string>(null as any);
			}).toThrow('KVPValidator init failed - validator argument is missing.');
		});

		it('should throw when validator-fn argument is  a non-function (undefined)', () => {
			expect(() => {
				const validator = new KVPValidator<string>(undefined as any);
			}).toThrow('KVPValidator init failed - validator argument is missing.');
		});

		it('should throw when validator-fn argument is a non-function (string)', () => {
			const sampleStr = '1110924AAA';
			expect(() => {
				const validator = new KVPValidator<string>(sampleStr as any);
			}).toThrow('KVPValidator init failed - validator argument is not a callable validator fn.');
		});

		it('should not throw when validator-fn argument is a validator-fn', () => {
			expect(() => {
				const fn: KVPValidatorFn<string> = (val: string | null): boolean => {
					return true;
				};
				const validator = new KVPValidator<string>(fn);
			}).not.toThrow();
		});

		it('should set validator property to the validator-fn argument', () => {
			const fn: KVPValidatorFn<string> = (val: string | null): boolean => {
				return true;
			};
			const validator = new KVPValidator<string>(fn);
			expect(validator.validator).toBe(fn);
		});
	});

	describe('Implementation', () => {
		let sampleFnFalse: KVPValidatorFn<string>;
		let sampleFnTrue: KVPValidatorFn<string>;

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
				const validator = new KVPValidator<string>(sampleFnFalse);
				expect(validator.run(MOCK_INPUT)).toBe(false);
			});
			it('should return true when wrapped validator fn returns true', () => {
				const validator = new KVPValidator<string>(sampleFnTrue);
				expect(validator.run(MOCK_INPUT)).toBe(true);
			});

			it('should return false when validator fn throws', () => {
				const fnThrow: KVPValidatorFn<string> = (val: string | null) => {
					throw new Error('Mock throw');
				};
				const validator = new KVPValidator<string>(fnThrow);
				expect(validator.run(MOCK_INPUT)).toBe(false);
			});

		});
	});
});
