import {HttpRequestHeader} from '../header';
import {httpRequestHeaders} from '../headers';

/**
 * Check whether provided string identifies a supported HTTP
 * Request header name.
 * @param key
 * @returns
 *
 * @category HTTP
 */
export function httpRequestHeaderSupported(key?: HttpRequestHeader | null): boolean {
	if (typeof key !== 'string') {
		return false;
	}

	return httpRequestHeaders.has(key);
}
