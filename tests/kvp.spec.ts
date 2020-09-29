import {KVP, KVPNB, createKVP, createKVPNB} from '../src/kvp';

const MOCK_INITIAL = '11110209';
const MOCK_STRING = '113333';
const MOCK_STRING2 = '10914094aaal';
const MOCK_FALLBACK = 'roman bree';
const MOCK_VALUE_UNDEFINED = undefined;
const MOCK_VALUE_NULL = null;

describe('KVP', () => {
	describe('createKVP', () => {
		describe('types', () => {
			let kvp: KVP<string>;

			beforeAll(() => {
				kvp = createKVP<string>(MOCK_INITIAL, MOCK_FALLBACK);
			});

			beforeEach(() => {
				kvp.reset();
			});

			it('should create and return a function', () => {
				expect(typeof kvp).toBe('function');
			});

			it('should return initial value when call with no arguments', () => {
				const sampleStr = '44198657635';
				const customKVP = createKVP<string>(sampleStr, MOCK_FALLBACK);
				expect(customKVP()).toBe(sampleStr);
			});

			it('should return default fallback value argument is not provided and value is null', () => {
				const customKVP = createKVP<string>(null, MOCK_FALLBACK);
				expect(customKVP()).toBe(MOCK_FALLBACK);
			});

			it('should set value when kvp is called with an argument', () => {
				const sampleStr = '44810100929';
				kvp(sampleStr);
				expect(kvp()).toBe(sampleStr);
			});

			it('should return fallback default when invoked with no arguments and value has been set to null', () => {
				const sampleStr = '44810100929';
				const kvp = createKVP<string>(MOCK_STRING, MOCK_FALLBACK);
				kvp(null);
				expect(kvp()).toBe(MOCK_FALLBACK);
			});

			describe('get', () => {
				it('should return provided fallback when value is null', () => {
					const sampleStr = '9419814981';
					expect(kvp.get(sampleStr)).toBe(sampleStr);
				});

				it('should return the fallback default when value is null and provided fallback is not valid', () => {
					const sampleStr = '4098211872';
					const kvp = createKVP<string>(MOCK_STRING, sampleStr);
					kvp(null);
					expect(kvp.get(undefined as any)).toBe(sampleStr);
				});
			});

			describe('getNullable', () => {
				it('should return value when value is not null', () => {
					const sampleStr = '6766199823';
					const kvp = createKVP<string>(sampleStr, MOCK_FALLBACK);
					expect(kvp.getNullable()).toBe(sampleStr);
				});

				it('should return null when value is null', () => {
					kvp(null);
					expect(kvp.getNullable()).toBeNull();
				});
			});

			describe('reset', () => {
				it('should set value to null when value is set by initial value', () => {
					const kvp = createKVP<string>(null, MOCK_FALLBACK);
					expect(kvp.getNullable()).toBeNull();
				});

				it('should set value to null when value is set invoking kvp("val") with argument', () => {
					const sampleStr = '881032091';
					kvp(sampleStr);
					expect(kvp()).toBe(sampleStr);
					kvp.reset();
					expect(kvp.getNullable()).toBeNull();
				});

				it('should not throw when value is already null', () => {
					kvp(null);
					expect(() => {
						kvp.reset();
					}).not.toThrow();
					expect(kvp.getNullable()).toBeNull();
				});

				it('should not throw when called repeatedly', () => {
					expect(() => {
						for (let i = 0; i < 10; i++) {
							kvp.reset();
						}
					}).not.toThrow();
					expect(kvp.getNullable()).toBeNull();
				});
			});
		});
	});

	describe('createKVPNB', () => {
		describe('Usage', () => {
			let kvp: KVPNB<string>;

			beforeAll(() => {
				kvp = createKVPNB<string>(MOCK_INITIAL, MOCK_FALLBACK);
			});

			beforeEach(() => {
				kvp.reset();
			});

			describe('invoking kvp()', () => {
				it('should return null when value is null', () => {
					const sampleStr = 'AAAVB';
					expect(kvp()).toBeNull();

					kvp(sampleStr);
					expect(kvp()).toBe(sampleStr);
				});

				it('should return string when value is set to string', () => {
					expect(kvp()).toBeNull();
					const sampleStr = 'VVVV0192309';
					kvp(sampleStr);
					expect(kvp()).toBe(sampleStr);
				});
			});

			describe('invoking kvp(value)', () => {
				it('should set value to null when value argument is null', () => {
					expect(kvp()).toBeNull();
					const sampleStr = 'VVVV0192309';
					kvp(sampleStr);
					expect(kvp()).toBe(sampleStr);
					kvp(null);
					expect(kvp()).toBeNull();
				});

				it('should not update current value when value argument is undefined', () => {
					expect(kvp()).toBeNull();
					const sampleStr = '110982_AAVMFKA';
					kvp(sampleStr);
					expect(kvp()).toBe(sampleStr);
					kvp(MOCK_VALUE_UNDEFINED);
					expect(kvp()).toBe(sampleStr);
				});
			});

			describe('kvp.reset()', () => {
				it('should set value to null when value is set invoking kvp("val") with argument', () => {
					const sampleStr = '4423211V';
					kvp(sampleStr);
					expect(kvp()).toBe(sampleStr);
					kvp.reset();
					expect(kvp()).toBeNull();
				});
			});
		});
	});
});
