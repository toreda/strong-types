import ArmorKVPValidator from '../src/validator';
import ArmorKVPValidators from '../src/validators';

describe('ArmorKVPValidators', () => {
	let instance: ArmorKVPValidators<string>;

	beforeAll(() => {
		instance = new ArmorKVPValidators<string>();
	});

	beforeEach(() => {
		instance.reset();
	});

	describe('Constructor', () => {
		it('should not throw when no arguments provided', () => {
			expect(() => {
				const custom = new ArmorKVPValidators<string>();
			}).not.toThrow();
		});

		it('should initialize validators property to an empty array', () => {
			const custom = new ArmorKVPValidators<string>();
			expect(custom.validators).toEqual([]);
		});
	});

	describe('Implementation', () => {
		describe('add', () => {
			it('should return true after adding a validator', () => {
				const v = new ArmorKVPValidator<string>((val: string | null) => {return true });
				expect(instance.add(v)).toBe(true);
			});

			it('should insert exactly one validator', () => {
				expect(instance.validators).toHaveLength(0);
				const v = new ArmorKVPValidator<string>((val: string | null) => {
					return true;
				});
				expect(instance.add(v)).toBe(true);
				expect(instance.validators).toHaveLength(1);
				expect(instance.validators[0]).toBe(v);
			});
		});

		describe('run', () => {
			let fn1: any;
			let fn2: any;
			let fn3: any;

			beforeAll(() => {
				fn1 = {
					run: jest.fn() as any
				};
				fn2 = {
					run: jest.fn() as any
				};
				fn3 = {
					run: jest.fn() as any
				}
			});

			beforeEach(() => {
				fn1.run.mockClear();
				fn2.run.mockClear();
				fn3.run.mockClear();
			});

			it('should return true when all validators pass', () => {
				const sampleStr = 'wonder_10984208';
				const v1 = new ArmorKVPValidator<string>((val: string | null) => {
					return true;
				});
				const v2 = new ArmorKVPValidator<string>((val: string | null) => {
					return true;
				});
				instance.addGroup([v1, v2]);

				expect(instance.run(sampleStr)).toBe(true);
			});

			it('should return false when at least one validators fails', () => {
				const sampleStr = 'wonder_10984208';
				const v1 = new ArmorKVPValidator<string>((val: string | null) => {
					return true;
				});
				const v2 = new ArmorKVPValidator<string>((val: string | null) => {
					return false;
				});
				instance.addGroup([v1, v2]);

				expect(instance.run(sampleStr)).toBe(false);
			});

			it('should stop executing validators after one fails', () => {
				const sampleStr = 'wonder_1889321';
				fn1.run.mockReturnValue(false);
				fn2.run.mockReturnValue(true);
				fn3.run.mockReturnValue(true);

				instance.addGroup([fn1, fn2, fn3]);
				instance.run(sampleStr);

				expect(fn1.run).toHaveBeenCalledTimes(1);
				expect(fn2.run).not.toHaveBeenCalled();
				expect(fn3.run).not.toHaveBeenCalled();
			});

		});

		describe('reset', () => {});
	});
});
