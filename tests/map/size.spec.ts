import {StrongMap} from 'src/map';
import {StrongSize} from 'src/map/size';

describe('StrongSize', () => {
	describe('Constructor', () => {
		const expectedWidth = 456;
		const expectedHeight = 789;
		const instance = new StrongSize(expectedWidth, expectedHeight);

		it('should not throw when args are null', () => {
			expect(() => {
				new StrongSize(null, null);
			}).not.toThrow();
		});

		it('should create an instance of StrongMap', () => {
			expect(instance).toBeInstanceOf(StrongMap);
		});

		it('should have two properties, width and height', () => {
			expect(instance.width).not.toBeUndefined();
			expect(instance.height).not.toBeUndefined();
		});

		it('width and height should return expected values', () => {
			expect(instance.width()).toBe(expectedWidth);
			expect(instance.height()).toBe(expectedHeight);
		});
	});
});
