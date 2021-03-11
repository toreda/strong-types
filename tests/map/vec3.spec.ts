import {StrongMap} from 'src/map';
import {StrongVec3} from 'src/map/vec3';

describe('StrongVec3', () => {
	describe('Constructor', () => {
		const expectedX = 159;
		const expectedY = 134;
		const expectedZ = 248;
		const instance = new StrongVec3(expectedX, expectedY, expectedZ);

		it('should not throw when args are null', () => {
			expect(() => {
				new StrongVec3(null, null, null);
			}).not.toThrow();
		});

		it('should create an instance of StrongMap', () => {
			expect(instance).toBeInstanceOf(StrongMap);
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
