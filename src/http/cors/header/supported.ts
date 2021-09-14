import {HttpCorsHeader} from '../header';
import {httpCorsHeaders} from '../headers';

/**
 * Check whether provided string identifies a supported HTTP
 * CORS header name.
 * @param key
 * @returns
 *
 * @category HTTP
 */
export function httpCorsHeaderSupported(key?: HttpCorsHeader | null): boolean {
	if (typeof key !== 'string') {
		return false;
	}

	return httpCorsHeaders.has(key);
}
