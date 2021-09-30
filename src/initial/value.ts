export function initialValue<T>(initial?: T | null): T | null {
	return initial !== undefined ? initial : null;
}
