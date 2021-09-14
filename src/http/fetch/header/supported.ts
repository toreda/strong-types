import {HttpFetchHeader} from '../header';
import {httpFetchHeaders} from '../headers';

/**
 * Check whether provided string identifies a supported HTTP
 * fetch header name.
 * @param key
 * @returns
 *
 * @category HTTP
 */
export function httpFetchHeaderSupported(key?: HttpFetchHeader | null): boolean {
	if (typeof key !== 'string') {
		return false;
	}

	return httpFetchHeaders.has(key);
}
