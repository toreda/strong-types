import {HttpResponseHeader} from '../header';
import {httpResponseHeaders} from '../headers';

/**
 * Check whether provided string identifies a supported HTTP
 * Response header name.
 * @param key
 * @returns
 *
 * @category HTTP
 */
export function httpResponseHeaderSupported(key?: HttpResponseHeader | null): boolean {
	if (typeof key !== 'string') {
		return false;
	}

	return httpResponseHeaders.has(key);
}
