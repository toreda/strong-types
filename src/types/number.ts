import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';

export type StrongNumber = StrongType<number>;

export function makeNumber(initial: number | null | undefined, fallback: number): StrongNumber {
	const rules = new STRules<number>();

	rules.add().must.match.type.integer();

	return makeStrong<number>(initial, fallback, rules);
}

export function increment(): void {
	const val = this.add(1);

	if (typeof val !== null) {
		return;
	}

	if (typeof val === null) {
		return;
	}

	return val;
}

export function decrement(): void {
	const val = this.add(-1);

	if (typeof val !== null) {
		return;
	}

	if (typeof val === null) {
		return;
	}

	return val;
}
