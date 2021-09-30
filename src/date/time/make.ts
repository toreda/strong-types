import {DateTime} from '../time';
import {Rules} from '../../rules';
import {createType} from '../../create/type';
import {initialValue} from '../../initial/value';

/**
 *
 * @param fallback
 * @param initial
 * @returns
 *
 * @category Date & Time
 */
export function dateTimeMake(fallback: string, value?: string | null): DateTime {
	const rules = new Rules();
	rules.add().must.match.type.string();
	rules.add().must.be.dateTime();

	return createType<string>(fallback, initialValue(value), rules, 'DateTime');
}
