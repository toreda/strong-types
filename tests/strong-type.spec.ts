import {StrongType, StrongTypeNB, makeStrong, makeStrongNB} from '../src/strong-type';

const MOCK_INITIAL = '11110209';
const MOCK_STRING = '113333';
const MOCK_STRING2 = '10914094aaal';
const MOCK_FALLBACK = 'roman bree';
const MOCK_VALUE_UNDEFINED = undefined;
const MOCK_VALUE_NULL = null;

describe('TypeBox', () => {
	describe('make', () => {
		describe('types', () => {
			let st: StrongType<string>;

			beforeAll(() => {
				st = makeStrong<string>(MOCK_INITIAL, MOCK_FALLBACK);
			});

			beforeEach(() => {
				st.reset();
			});

			it('should make and return a function', () => {
				expect(typeof st).toBe('function');
			});

			it('should return initial value when call with no arguments', () => {
				const sampleStr = '44198657635';
				const custom = makeStrong<string>(sampleStr, MOCK_FALLBACK);
				expect(custom()).toBe(sampleStr);
			});

			it('should return default fallback value argument is not provided and value is null', () => {
				const custom = makeStrong<string>(null, MOCK_FALLBACK);
				expect(custom()).toBe(MOCK_FALLBACK);
			});

			it('should set value when st is called with an argument', () => {
				const sampleStr = '44810100929';
				st(sampleStr);
				expect(st()).toBe(sampleStr);
			});

			it('should return fallback default when invoked with no arguments and value has been set to null', () => {
				const sampleStr = '44810100929';
				const st = makeStrong<string>(MOCK_STRING, MOCK_FALLBACK);
				st(null);
				expect(st()).toBe(MOCK_FALLBACK);
			});

			describe('get', () => {
				it('should return provided fallback when value is null', () => {
					const sampleStr = '9419814981';
					expect(st.get(sampleStr)).toBe(sampleStr);
				});

				it('should return the fallback default when value is null and provided fallback is not valid', () => {
					const sampleStr = '4098211872';
					const st = makeStrong<string>(MOCK_STRING, sampleStr);
					st(null);
					expect(st.get(undefined as any)).toBe(sampleStr);
				});
			});

			describe('getNullable', () => {
				it('should return value when value is not null', () => {
					const sampleStr = '6766199823';
					const st = makeStrong<string>(sampleStr, MOCK_FALLBACK);
					expect(st.getNullable()).toBe(sampleStr);
				});

				it('should return null when value is null', () => {
					st(null);
					expect(st.getNullable()).toBeNull();
				});
			});

			describe('reset', () => {
				it('should set value to null when value is set by initial value', () => {
					const st = makeStrong<string>(null, MOCK_FALLBACK);
					expect(st.getNullable()).toBeNull();
				});

				it('should set value to null when value is set invoking st("val") with argument', () => {
					const sampleStr = '881032091';
					st(sampleStr);
					expect(st()).toBe(sampleStr);
					st.reset();
					expect(st.getNullable()).toBeNull();
				});

				it('should not throw when value is already null', () => {
					st(null);
					expect(() => {
						st.reset();
					}).not.toThrow();
					expect(st.getNullable()).toBeNull();
				});

				it('should not throw when called repeatedly', () => {
					expect(() => {
						for (let i = 0; i < 10; i++) {
							st.reset();
						}
					}).not.toThrow();
					expect(st.getNullable()).toBeNull();
				});
			});
		});
	});

	describe('makeStrongNB', () => {
		describe('Usage', () => {
			let st: StrongTypeNB<string>;

			beforeAll(() => {
				st = makeStrongNB<string>(MOCK_INITIAL, MOCK_FALLBACK);
			});

			beforeEach(() => {
				st.reset();
			});

			describe('invoking st()', () => {
				it('should return null when value is null', () => {
					const sampleStr = 'AAAVB';
					expect(st()).toBeNull();

					st(sampleStr);
					expect(st()).toBe(sampleStr);
				});

				it('should return string when value is set to string', () => {
					expect(st()).toBeNull();
					const sampleStr = 'VVVV0192309';
					st(sampleStr);
					expect(st()).toBe(sampleStr);
				});
			});

			describe('invoking st(value)', () => {
				it('should set value to null when value argument is null', () => {
					expect(st()).toBeNull();
					const sampleStr = 'VVVV0192309';
					st(sampleStr);
					expect(st()).toBe(sampleStr);
					st(null);
					expect(st()).toBeNull();
				});

				it('should not update current value when value argument is undefined', () => {
					expect(st()).toBeNull();
					const sampleStr = '110982_AAVMFKA';
					st(sampleStr);
					expect(st()).toBe(sampleStr);
					st(MOCK_VALUE_UNDEFINED);
					expect(st()).toBe(sampleStr);
				});
			});

			describe('st.reset()', () => {
				it('should set value to null when value is set invoking st("val") with argument', () => {
					const sampleStr = '4423211V';
					st(sampleStr);
					expect(st()).toBe(sampleStr);
					st.reset();
					expect(st()).toBeNull();
				});
			});
		});
	});
});
