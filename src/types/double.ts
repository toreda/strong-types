import {StrongType, makeStrong} from '../strong-type';

import {STRules} from '../rules';
import {StrongNumber} from '../strong-number';

export type StrongDouble = StrongNumber;

export function makeDouble(initial: number | null | undefined, fallback: number): StrongDouble {
	const rules = new STRules<number>();
	rules.add().must.match.type.double();

	const strong = makeStrong<number>(initial, fallback, rules);

	return Object.assign(strong, {
		increment: () => {},
		decrement: () => {}
	});
}
