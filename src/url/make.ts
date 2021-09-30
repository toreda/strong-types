import {Rules} from '../rules';
import {Url} from '../url';
import {createType} from '../create/type';
import {initialValue} from '../initial/value';

/**
 * Create new strong Url object. Only valid Urls can be set.
 * @param fallback
 * @param initial
 * @returns
 *
 * @category Strings
 */
export function urlMake(fallback: string, value?: string | null): Url {
	const rules = new Rules();
	rules.add().must.match.type.string();
	rules.add().must.be.url();

	return createType<string>(fallback, initialValue(value), rules, 'Url');
}
