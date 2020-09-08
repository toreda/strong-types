import ArmorKVP, {ArmorKVPNullable, createKVP, createKVPNullable} from '../src/kvp';

const types = [];
const MOCK_INITIAL = '11110209';
const MOCK_STRING = '113333';
const MOCK_STRING2 = '10914094aaal';
const MOCK_FALLBACK = 'roman bree';

describe('ArmorKVP', () => {
	describe('createKVP', () => {
		describe('types', () => {
			describe('string type', () => {
				let strKVP: ArmorKVP<string>;

				beforeAll(() => {
					strKVP = createKVP<string>(MOCK_INITIAL, MOCK_FALLBACK);
				});

				it('should create and return a function', () => {
					expect(typeof strKVP).toBe('function');
				});

				it('should return initial value when call with no arguments', () => {
					expect(strKVP()).toBe(MOCK_INITIAL);
				});

				it('should return default fallback value argument is not provided and value is null', () => {
					const kvp = createKVP<string>(null, MOCK_FALLBACK);
					expect(kvp()).toBe(MOCK_FALLBACK);
				});

				it('should set value when kvp is called with an argument', () => {
					const sampleStr = '44810100929';
					const kvp = createKVP<string>(MOCK_STRING, MOCK_FALLBACK);
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
						const kvp = createKVP<string>(null, MOCK_FALLBACK);
						expect(kvp.get(sampleStr)).toBe(sampleStr);
					});

					it('should return the fallback default when value is null and provided fallback is not valid', () => {
							const sampleStr = '4098211872';
						const kvp = createKVP<string>(null, sampleStr);
						expect(kvp.get(undefined as any)).toBe(sampleStr);
					});
				});
			});
		});
	});

	describe('createKVPNullable', () => {});
});
