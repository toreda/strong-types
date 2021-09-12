import {Vec4} from '../src/vec4';

const MOCK_X = 1081;
const MOCK_Y = 97141;
const MOCK_Z = 971971;
const MOCK_W = 60417;

describe('Vec4', () => {
	let instance: Vec4;
	beforeAll(() => {
		instance = new Vec4(MOCK_X, MOCK_Y, MOCK_Z, MOCK_W);
	});

	describe('Constructor', () => {
		it('should not throw when args are null', () => {
			expect(() => {
				new Vec4(null, null, null, null);
			}).not.toThrow();
		});

		it('should create an instance of Vec4', () => {
			expect(instance).toBeInstanceOf(Vec4);
		});

		it('should have properties: x, y, z, w', () => {
			expect(instance.x).not.toBeUndefined();
			expect(instance.y).not.toBeUndefined();
			expect(instance.z).not.toBeUndefined();
			expect(instance.w).not.toBeUndefined();
		});

		it(`should init x to provided x arg`, () => {
			expect(instance.x()).toBe(MOCK_X);
		});

		it(`should init y to provided y arg`, () => {
			expect(instance.y()).toBe(MOCK_Y);
		});

		it(`should init z to provided z arg`, () => {
			expect(instance.z()).toBe(MOCK_Z);
		});

		it(`should init w to provided w arg`, () => {
			expect(instance.w()).toBe(MOCK_W);
		});
	});
});
