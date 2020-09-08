import ArmorKVP, {ArmorKVPNullable, createKVP, createKVPNullable} from '../src/kvp';

const types = [];
const MOCK_INITIAL = '11110209';
const MOCK_STRING = '113333';
const MOCK_STRING2 = '10914094aaal';
const MOCK_FALLBACK = 'roman bree';

interface TestSet {
	type: any;
	initial: any;
	fallback: any;
}

const TEST_SETS: TestSet[] = [
	{
		type: String,
		label: 'String',
		initial: '10948728710',
		fallback: '4812019283492'
	},
	{
		type: Number,
		label: 'Number',
		initial: 101,
		fallback: 202
	},
	{
		type: Boolean,
		label: 'Boolean',
		initial: true,
		fallback: true
	}
];

const TEST_SETS_NULLABLE: TestSet[] = [];

describe('ArmorKVP', () => {
	describe('createKVP', () => {
		describe('types', () => {
			describe('string', () => {
				let strKVP: ArmorKVP<string>;

				beforeAll(() => {
					strKVP = createKVP<string>(MOCK_INITIAL, MOCK_FALLBACK);
				});

				beforeEach(() => {
					strKVP.reset();
				});

				it('should create and return a function', () => {
					expect(typeof strKVP).toBe('function');
				});

				it('should return initial value when call with no arguments', () => {
					const sampleStr = '44198657635';
					const kvp = createKVP<string>(sampleStr, MOCK_FALLBACK);
					expect(kvp()).toBe(sampleStr);
				});

				it('should return default fallback value argument is not provided and value is null', () => {
					const kvp = createKVP<string>(null, MOCK_FALLBACK);
					expect(kvp()).toBe(MOCK_FALLBACK);
				});

				it('should set value when kvp is called with an argument', () => {
					const sampleStr = '44810100929';
					strKVP(sampleStr);
					expect(strKVP()).toBe(sampleStr);
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
						expect(strKVP.get(sampleStr)).toBe(sampleStr);
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
						strKVP(null);
						expect(strKVP.getNullable()).toBeNull();
					});
				});

				describe('reset', () => {
					it('should set value to null when value is set by initial value', () => {
						const kvp = createKVP<string>(null, MOCK_FALLBACK);
						expect(kvp.getNullable()).toBeNull();
					});

					it('should set value to null when value is set invoking kvp("val") with argument', () => {
						const sampleStr = '881032091';
						strKVP(sampleStr);
						expect(strKVP()).toBe(sampleStr);
						strKVP.reset();
						expect(strKVP.getNullable()).toBeNull();
					});

					it('should not throw when value is already null', () => {
						strKVP(null);
						expect(() => {
							strKVP.reset();
						}).not.toThrow();
						expect(strKVP.getNullable()).toBeNull();
					});

					it('should not throw when called repeatedly', () => {
						expect(() => {
							for (let i = 0; i < 10; i++) {
								strKVP.reset();
							}
						}).not.toThrow();
						expect(strKVP.getNullable()).toBeNull();
					});
				});
			});
		});
	});

	describe('createKVPNullable', () => {
		describe('types', () => {
			describe('string', () => {
				it('should return value when value is set', () => {});
			});
		});
	});
});
