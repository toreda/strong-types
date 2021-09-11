import {Transform} from '../src/transform';
import {TransformNB} from '../src/transform/nb';
import {Transforms} from '../src/transforms';

const MOCK_STRING = 'oneoneone';

describe('STTransforms', () => {
	let instance: Transforms<string>;

	beforeAll(() => {
		instance = new Transforms<string>(MOCK_STRING);
	});

	describe('Constructor', () => {
		it('shall pass', () => {});
	});

	describe('Implementation', () => {
		describe('add', () => {
			let custom: Transforms<string>;
			const MOCK_FALLBACK1 = '22222233333___11';

			beforeEach(() => {
				custom = new Transforms<string>(MOCK_FALLBACK1);
			});

			it('should return false when transform argument is null', () => {
				expect(custom.add(null as any)).toBe(false);
			});

			it('should return false when transform argument is undefined', () => {
				expect(custom.add(undefined as any)).toBe(false);
			});
		});

		describe('addNB', () => {
			let custom: Transforms<string>;
			const MOCK_FALLBACK1 = '22222233333___11';

			beforeEach(() => {
				custom = new Transforms<string>(MOCK_FALLBACK1);
			});

			it('should return false when transform argument is null', () => {
				expect(custom.addNB(null as any)).toBe(false);
			});

			it('should return false when transform argument is undefined', () => {
				expect(custom.addNB(undefined as any)).toBe(false);
			});

			it('should add exactly 1 element to transformsNB when argument is a transform', () => {
				const fn = jest.fn();
				const transformNB = new Transform<string>(fn);
				expect(custom.transformsNB).toHaveLength(0);
				custom.addNB(transformNB);
				expect(custom.transformsNB).toHaveLength(1);
			});
		});

		describe('run', () => {
			let custom: Transforms<string>;
			const MOCK_FALLBACK1 = '22222233333___11';
			beforeEach(() => {
				custom = new Transforms<string>(MOCK_FALLBACK1);
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
				const transform1 = new Transform(tf1);

				const tf2 = jest.fn();
				tf1.mockImplementation((val: string) => {
					return val;
				});
				const transform2 = new Transform(tf2);
				const tf3 = jest.fn();
				tf3.mockImplementation((val: string) => {
					return val;
				});
				const transform3 = new Transform(tf3);

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

		describe('runNB', () => {
			let custom: Transforms<string>;
			const MOCK_FALLBACK1 = '22222233333___11';

			beforeEach(() => {
				custom = new Transforms<string>(MOCK_FALLBACK1);
			});

			it('should return null when value argument is null', () => {
				expect(custom.runNB(null as any)).toBeNull();
			});

			it('should return null when value argument is undefined', () => {
				expect(custom.runNB(undefined as any)).toBeNull();
			});

			it('should return value argument when no transforms are applied', () => {
				const inputValue = 'one_one_two';
				expect(custom.transforms).toHaveLength(0);
				expect(custom.runNB(inputValue)).toBe(inputValue);
			});

			it('should return a final value modified by each transform in order', () => {
				const fn1 = jest.fn();
				fn1.mockImplementation((a: number): number => {
					return a + 1;
				});
				const fn2 = jest.fn();
				fn2.mockImplementation((a: number): number => {
					return a * 2;
				});
				const fn3 = jest.fn();
				fn3.mockImplementation((a: number): number => {
					return a * 10;
				});
				const ST = new Transforms<number>(0);
				const nbt1 = new TransformNB<number>(fn1);
				const nbt2 = new TransformNB<number>(fn2);
				const nbt3 = new TransformNB<number>(fn3);
				ST.addNB(nbt1);
				ST.addNB(nbt2);
				ST.addNB(nbt3);
				expect(ST.runNB(0)).toBe(20);
			});
		});
	});
});
