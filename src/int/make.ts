import {Int} from '../int';
import {Rules} from '../rules';
import {createType} from '../create/type';
import {initialValue} from '../initial/value';

/**
 *
 * @param fallback
 * @param value
 * @returns
 *
 * @category Maths
 */
export function intMake(fallback: number, value?: number | null): Int {
	const rules = new Rules();
	rules.add().must.match.type.int();

	const strong = createType<number>(fallback, initialValue(value), rules, 'Int');

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
