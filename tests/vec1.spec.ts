import {Defaults} from '../src/defaults';
import {Vec1} from '../src/vec1';

const MOCK_X = 77190;
describe('Vec1', () => {
	let instance: Vec1;

	beforeAll(() => {
		instance = new Vec1(MOCK_X);
	});

	describe('Constructor', () => {
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
			expect(instance.x()).toBe(MOCK_X);
		});
	});

	describe('reset', () => {
		it(`should reset x property to default value`, () => {
			instance.x(881340);
			expect(instance.x()).toBe(881340);
			instance.reset();
			expect(instance.x()).toBe(Defaults.Vec.X);
		});
	});
});

