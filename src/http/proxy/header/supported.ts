import {HttpProxyHeader} from '../../proxy/header';
import {httpProxyHeaders} from '../../proxy/headers';

/**
 * Check whether provided string identifies a supported HTTP
 * proxy header name.w
 * @param key
 * @returns
 *
 * @category HTTP
 */
export function httpProxyHeaderSupported(key?: HttpProxyHeader | null): boolean {
	if (typeof key !== 'string') {
		return false;
	}

	return httpProxyHeaders.has(key);
}
