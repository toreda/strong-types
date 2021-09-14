import {HttpCacheHeader} from '../header';
import {httpCacheHeaders} from '../headers';

/**
 * Check whether provided string identifies a supported HTTP
 * Cache header name.
 * @param key
 * @returns
 *
 * @category HTTP
 */
export function httpCacheHeaderSupported(key?: HttpCacheHeader | null): boolean {
	if (typeof key !== 'string') {
		return false;
	}

	return httpCacheHeaders.has(key);
}
