import {Vec1} from '../src/vec1';

describe('Vec1', () => {
	describe('Constructor', () => {
		const expectedX = 298;
		const instance = new Vec1(expectedX);

		it('should not throw when args are null', () => {
			expect(() => {
				const custom = new Vec1(null);
			}).not.toThrow();
		});

		it('should create an instance of Vec1', () => {
			expect(instance).toBeInstanceOf(Vec1);
		});

		it('should have properties: x', () => {
			expect(instance.x).not.toBeUndefined();
		});

		it('x should return expected value', () => {
			expect(instance.x()).toBe(expectedX);
		});
	});
});
