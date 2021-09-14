import {HttpAuthHeader} from '../header';
import {httpAuthHeaders} from '../headers';

/**
 * Check whether provided string identifies a supported HTTP
 * Auth header name.
 * @param key
 * @returns
 *
 * @category HTTP
 */
export function httpAuthHeaderSupported(key?: HttpAuthHeader | null): boolean {
	if (typeof key !== 'string') {
		return false;
	}

	return httpAuthHeaders.has(key);
}
