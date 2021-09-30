import {SafeMoney} from '../../safe/money';

export function isSafeMoney(o: unknown): o is SafeMoney {
	if (o === undefined || o === null) {
		return false;
	}

	const result = o as SafeMoney;
	return result.typeId === 'SafeMoney';
}
