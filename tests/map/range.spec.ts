import {StrongMap} from 'src/map';
import {StrongRange} from 'src/map/range';

describe('StrongRange', () => {
	describe('Constructor', () => {
		const expectedMin = 19384;
		const expectedMax = 91278;
		const instance = new StrongRange(expectedMin, expectedMax);

		it('should not throw when args are null', () => {
			expect(() => {
				new StrongRange(null, null);
			}).not.toThrow();
		});

		it('should create an instance of StrongMap', () => {
			expect(instance).toBeInstanceOf(StrongMap);
		});

		it('should have two properties, min and max', () => {
			expect(instance.min).not.toBeUndefined();
			expect(instance.max).not.toBeUndefined();
		});

		it('min and max should return expected values', () => {
			expect(instance.min()).toBe(expectedMin);
			expect(instance.max()).toBe(expectedMax);
		});
	});
});
