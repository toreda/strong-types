/**
 * Remove an array element in O(1) time if element ndx is known.
 * Works only with unordered arrays.
 * @param array
 * @param ndx
 */
export function swapPop<T>(array: T[], ndx: number): T | null {
	if (!array.length) {
		// pop always returns a value if the length is greater
		// than zero. This check prevents pop from returning a
		// value of undefined.
		return null;
	}

	if (ndx >= array.length || ndx < 0) {
		return null;
	}

	if (array.length === 1 || ndx === array.length - 1) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		return array.pop()!;
	}

	// Save the element at ndx in the array to
	// keep it safe while we overwrite the slot.
	const element = array[ndx];

	// Move the last element into ndx slot.
	array[ndx] = array[array.length - 1];

	// Pop the last element off the array
	array.pop();

	return element;
}
