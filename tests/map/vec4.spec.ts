import {StrongMap} from 'src/map';
import {StrongVec4} from 'src/map/vec4';

describe('StrongVec4', () => {
	describe('Constructor', () => {
		const expectedX = 846;
		const expectedY = 531;
		const expectedZ = 953;
		const expectedW = 751;
		const instance = new StrongVec4(expectedX, expectedY, expectedZ, expectedW);

		it('should not throw when args are null', () => {
			expect(() => {
				new StrongVec4(null, null, null, null);
			}).not.toThrow();
		});

		it('should create an instance of StrongMap', () => {
			expect(instance).toBeInstanceOf(StrongMap);
		});

		it('should have properties: x, y, z, w', () => {
			expect(instance.x).not.toBeUndefined();
			expect(instance.y).not.toBeUndefined();
			expect(instance.z).not.toBeUndefined();
			expect(instance.w).not.toBeUndefined();
		});

		it('x, y, z, w should return expected values', () => {
			expect(instance.x()).toBe(expectedX);
			expect(instance.y()).toBe(expectedY);
			expect(instance.z()).toBe(expectedZ);
			expect(instance.w()).toBe(expectedW);
		});
	});
});
