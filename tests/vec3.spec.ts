import {Defaults} from '../src/defaults';
import {Vec3} from '../src/vec3';

const MOCK_X = 159;
const MOCK_Y = 134;
const MOCK_Z = 248;

describe('Vec3', () => {
	let instance: Vec3;

	beforeAll(() => {
		instance = new Vec3(MOCK_X, MOCK_Y, MOCK_Z);
	});

	describe('Constructor', () => {
		it('should not throw when args are null', () => {
			expect(() => {
				const custom = new Vec3(null, null, null);
			}).not.toThrow();
		});

		it('should create an instance of Vec3', () => {
			expect(instance).toBeInstanceOf(Vec3);
		});

		it('should have properties: x, y, z', () => {
			expect(instance.x).not.toBeUndefined();
			expect(instance.y).not.toBeUndefined();
			expect(instance.z).not.toBeUndefined();
		});

		it('x, y, z should return initial values', () => {
			expect(instance.x()).toBe(MOCK_X);
			expect(instance.y()).toBe(MOCK_Y);
			expect(instance.z()).toBe(MOCK_Z);
		});
	});

	describe('reset', () => {
		it(`should reset x property to default value`, () => {
			instance.x(881340);
			expect(instance.x()).toBe(881340);
			instance.reset();
			expect(instance.x()).toBe(Defaults.Vec.X);
		});

		it(`should reset y property to default value`, () => {
			instance.y(667181);
			expect(instance.y()).toBe(667181);
			instance.reset();
			expect(instance.y()).toBe(Defaults.Vec.X);
		});

		it(`should reset y property to default value`, () => {
			instance.z(88776661);
			expect(instance.z()).toBe(88776661);
			instance.reset();
			expect(instance.z()).toBe(Defaults.Vec.Z);
		});
	});
});
