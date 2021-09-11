import {StrongMap} from '../../src/map';
import {Vec2} from '../../src/map/vec2';

describe('StrongVec2', () => {
	describe('Constructor', () => {
		const expectedX = 457;
		const expectedY = 856;
		const instance = new Vec2(expectedX, expectedY);

		it('should not throw when args are null', () => {
			expect(() => {
				new Vec2(null, null);
			}).not.toThrow();
		});

		it('should create an instance of StrongMap', () => {
			expect(instance).toBeInstanceOf(StrongMap);
		});

		it('should have properties: x, y', () => {
			expect(instance.x).not.toBeUndefined();
			expect(instance.y).not.toBeUndefined();
		});

		it('x, y should return expected values', () => {
			expect(instance.x()).toBe(expectedX);
			expect(instance.y()).toBe(expectedY);
		});
	});
});
