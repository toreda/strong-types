import {Vec2} from '../src/vec2';

const MOCK_X = 77911;
const MOCK_Y = 88190;

describe('Vec2', () => {
	let instance: Vec2;

	beforeAll(() => {
		instance = new Vec2(MOCK_X, MOCK_Y);
	});

	describe('Constructor', () => {
		it('should not throw when args are null', () => {
			expect(() => {
				const custom = new Vec2(null, null);
			}).not.toThrow();
		});

		it('should create an instance of Vec2', () => {
			expect(instance).toBeInstanceOf(Vec2);
		});

		it('should have properties: x, y', () => {
			expect(instance.x).not.toBeUndefined();
			expect(instance.y).not.toBeUndefined();
		});

		it(`should init x to provided x arg`, () => {
			expect(instance.x()).toBe(MOCK_X);
		});

		it(`should init y to provided y arg`, () => {
			expect(instance.y()).toBe(MOCK_Y);
		});
	});
});
