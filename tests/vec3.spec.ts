import {Vec3} from '../src/vec3';

describe('Vec3', () => {
	describe('Constructor', () => {
		const expectedX = 159;
		const expectedY = 134;
		const expectedZ = 248;
		const instance = new Vec3(expectedX, expectedY, expectedZ);

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

		it('x, y, z should return expected values', () => {
			expect(instance.x()).toBe(expectedX);
			expect(instance.y()).toBe(expectedY);
			expect(instance.z()).toBe(expectedZ);
		});
	});
});
