import {swapPop} from '../../src/swap/pop';

describe('swapPop', () => {
	it('should return null if array has no elements', () => {
		const arr: string[] = [];
		expect(arr.length).toBe(0);

		const result = swapPop(arr, 1);

		expect(result).toBeNull();
	});

	const ndxs = [99, -1];
	it.each(ndxs)('should return null because index %p is outside the array', (ndx) => {
		const arr: number[] = [42];
		expect(arr.length).toBeGreaterThan(0);

		const result = swapPop(arr, ndx as number);

		expect(result).toBeNull();
	});

	it('should return only element when array is size 1', () => {
		const expectedValue = 42;
		const arr: number[] = [expectedValue];
		expect(arr.length).toBe(1);

		const result = swapPop(arr, 0);

		expect(result).toBe(expectedValue);
	});

	it('should return the last element when ndx is the last index', () => {
		const expectedValue = 204;
		const arr: number[] = [846, 255, expectedValue];
		const ndx = arr.length - 1;
		expect(arr.length).toBeGreaterThan(1);

		const result = swapPop(arr, ndx);

		expect(result).toBe(expectedValue);
	});

	it('should swap the last element with the ndx element', () => {
		const arr: number[] = [2, 4, 6, 8, 10, 12];
		const lastElement = arr[arr.length - 1];
		const ndx = 3;
		expect(arr[ndx]).not.toBe(lastElement);

		swapPop(arr, ndx);

		expect(arr[ndx]).toBe(lastElement);
	});

	it('should reduce the size of the array by one', () => {
		const arr = [12, 34, 45, 78, 89];
		const expectedValue = arr.length - 1;
		expect(arr.length).toBe(expectedValue + 1);

		swapPop(arr, 0);

		expect(arr.length).toBe(expectedValue);
	});

	it('should remove the element at ndx from the array', () => {
		const arr = [934, 812, 387, 555, 349];
		const ndx = 3;
		const removedItem = arr[ndx];
		expect(arr).toContain(removedItem);

		swapPop(arr, ndx);

		expect(arr).not.toContain(removedItem);
	});
});
