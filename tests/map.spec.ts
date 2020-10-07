import {StrongMap} from '../src/map';

describe('StrongMap', () => {
	let instance: StrongMap;

	beforeAll(() => {
		instance = new StrongMap();
	});

	describe('Constructor', () => {
		it('should not throw when no arguments provided', () => {
			expect(() => {
				new StrongMap();
			}).not.toThrow();
		});

		it("should initialize property 'enabled' with default value true", () => {
			expect(instance.enabled()).toBe(true);
		});
	});

	describe('Expected Class Methods', () => {});
});
