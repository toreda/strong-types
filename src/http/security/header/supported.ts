import {HttpSecurityHeader} from '../header';
import {httpSecurityHeaders} from '../headers';

/**
 * Check whether provided string identifies a supported HTTP
 * Security header name.
 * @param key
 * @returns
 *
 * @category HTTP
 */
export function httpSecurityHeaderSupported(key?: HttpSecurityHeader | null): boolean {
	if (typeof key !== 'string') {
		return false;
	}

	return httpSecurityHeaders.has(key);
}
