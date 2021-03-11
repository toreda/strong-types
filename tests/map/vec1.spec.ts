import {StrongMap} from 'src/map';
import {StrongVec1} from 'src/map/vec1';

describe('StrongVec1', () => {
	describe('Constructor', () => {
		const expectedX = 298;
		const instance = new StrongVec1(expectedX);

		it('should not throw when args are null', () => {
			expect(() => {
				new StrongVec1(null);
			}).not.toThrow();
		});

		it('should create an instance of StrongMap', () => {
			expect(instance).toBeInstanceOf(StrongMap);
		});

		it('should have properties: x', () => {
			expect(instance.x).not.toBeUndefined();
		});

		it('x should return expected value', () => {
			expect(instance.x()).toBe(expectedX);
		});
	});
});
