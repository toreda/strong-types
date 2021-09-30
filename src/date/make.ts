import {Date} from '../date';
import {Rules} from '../rules';
import {createType} from '../create/type';
import {initialValue} from '../initial/value';

/**
 * @category Date & Time
 */
export function dateMake(fallback: string, value?: string | null): Date {
	const rules = new Rules();
	rules.add().must.match.type.string();
	rules.add().must.be.date();

	return createType<string>(fallback, initialValue(value), rules, 'Date');
}
