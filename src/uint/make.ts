import {Rules} from '../rules';
import {UInt} from '../uint';
import {createType} from '../create/type';
import {initialValue} from '../initial/value';

/**
 * Create new strong unsigned integer.
 * @param fallback
 * @param initial
 * @returns
 *
 * @category Maths
 */
export function uIntMake(fallback: number, value?: number | null): UInt {
	const rules = new Rules<number>();

	rules.add().must.match.type.int();
	rules.add().must.be.greaterThanOrEqual(0);

	const strong = createType<number>(fallback, initialValue(value), rules, 'UInt');

	return Object.assign(strong, {
		increment: () => {
			return strong._data.add(1);
		},
		decrement: () => {
			return strong._data.add(-1);
		},
		mul: (amt: number) => {
			return strong._data.mul(amt);
		},
		pow: (exponent: number) => {
			return strong._data.pow(exponent);
		},
		div: (amt: number) => {
			return strong._data.div(amt);
		},
		add: (amt: number) => {
			return strong._data.add(amt);
		},
		sub: (amt: number) => {
			return strong._data.add(amt * -1);
		}
	});
}
