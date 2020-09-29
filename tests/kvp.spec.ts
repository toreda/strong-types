import {TypeBox, TypeBoxNB, create, createNB} from '../src/type-box';

const MOCK_INITIAL = '11110209';
const MOCK_STRING = '113333';
const MOCK_STRING2 = '10914094aaal';
const MOCK_FALLBACK = 'roman bree';
const MOCK_VALUE_UNDEFINED = undefined;
const MOCK_VALUE_NULL = null;

describe('TypeBox', () => {
	describe('create', () => {
		describe('types', () => {
			let tb: TypeBox<string>;

			beforeAll(() => {
				tb = create<string>(MOCK_INITIAL, MOCK_FALLBACK);
			});

			beforeEach(() => {
				tb.reset();
			});

			it('should create and return a function', () => {
				expect(typeof tb).toBe('function');
			});

			it('should return initial value when call with no arguments', () => {
				const sampleStr = '44198657635';
				const customTB = create<string>(sampleStr, MOCK_FALLBACK);
				expect(customTB()).toBe(sampleStr);
			});

			it('should return default fallback value argument is not provided and value is null', () => {
				const customTB = create<string>(null, MOCK_FALLBACK);
				expect(customTB()).toBe(MOCK_FALLBACK);
			});

			it('should set value when tb is called with an argument', () => {
				const sampleStr = '44810100929';
				tb(sampleStr);
				expect(tb()).toBe(sampleStr);
			});

			it('should return fallback default when invoked with no arguments and value has been set to null', () => {
				const sampleStr = '44810100929';
				const tb = create<string>(MOCK_STRING, MOCK_FALLBACK);
				tb(null);
				expect(tb()).toBe(MOCK_FALLBACK);
			});

			describe('get', () => {
				it('should return provided fallback when value is null', () => {
					const sampleStr = '9419814981';
					expect(tb.get(sampleStr)).toBe(sampleStr);
				});

				it('should return the fallback default when value is null and provided fallback is not valid', () => {
					const sampleStr = '4098211872';
					const tb = create<string>(MOCK_STRING, sampleStr);
					tb(null);
					expect(tb.get(undefined as any)).toBe(sampleStr);
				});
			});

			describe('getNullable', () => {
				it('should return value when value is not null', () => {
					const sampleStr = '6766199823';
					const tb = create<string>(sampleStr, MOCK_FALLBACK);
					expect(tb.getNullable()).toBe(sampleStr);
				});

				it('should return null when value is null', () => {
					tb(null);
					expect(tb.getNullable()).toBeNull();
				});
			});

			describe('reset', () => {
				it('should set value to null when value is set by initial value', () => {
					const tb = create<string>(null, MOCK_FALLBACK);
					expect(tb.getNullable()).toBeNull();
				});

				it('should set value to null when value is set invoking tb("val") with argument', () => {
					const sampleStr = '881032091';
					tb(sampleStr);
					expect(tb()).toBe(sampleStr);
					tb.reset();
					expect(tb.getNullable()).toBeNull();
				});

				it('should not throw when value is already null', () => {
					tb(null);
					expect(() => {
						tb.reset();
					}).not.toThrow();
					expect(tb.getNullable()).toBeNull();
				});

				it('should not throw when called repeatedly', () => {
					expect(() => {
						for (let i = 0; i < 10; i++) {
							tb.reset();
						}
					}).not.toThrow();
					expect(tb.getNullable()).toBeNull();
				});
			});
		});
	});

	describe('createNB', () => {
		describe('Usage', () => {
			let tb: TypeBoxNB<string>;

			beforeAll(() => {
				tb = createNB<string>(MOCK_INITIAL, MOCK_FALLBACK);
			});

			beforeEach(() => {
				tb.reset();
			});

			describe('invoking tb()', () => {
				it('should return null when value is null', () => {
					const sampleStr = 'AAAVB';
					expect(tb()).toBeNull();

					tb(sampleStr);
					expect(tb()).toBe(sampleStr);
				});

				it('should return string when value is set to string', () => {
					expect(tb()).toBeNull();
					const sampleStr = 'VVVV0192309';
					tb(sampleStr);
					expect(tb()).toBe(sampleStr);
				});
			});

			describe('invoking tb(value)', () => {
				it('should set value to null when value argument is null', () => {
					expect(tb()).toBeNull();
					const sampleStr = 'VVVV0192309';
					tb(sampleStr);
					expect(tb()).toBe(sampleStr);
					tb(null);
					expect(tb()).toBeNull();
				});

				it('should not update current value when value argument is undefined', () => {
					expect(tb()).toBeNull();
					const sampleStr = '110982_AAVMFKA';
					tb(sampleStr);
					expect(tb()).toBe(sampleStr);
					tb(MOCK_VALUE_UNDEFINED);
					expect(tb()).toBe(sampleStr);
				});
			});

			describe('tb.reset()', () => {
				it('should set value to null when value is set invoking tb("val") with argument', () => {
					const sampleStr = '4423211V';
					tb(sampleStr);
					expect(tb()).toBe(sampleStr);
					tb.reset();
					expect(tb()).toBeNull();
				});
			});
		});
	});
});
