import {HttpMethod} from '../method';
import {httpMethods} from '../methods';

/**
 * Check whether provided string is a supported HTTP request method.
 * @param method
 * @returns
 *
 * @category HTTP
 */
export function httpMethodSupported(method?: HttpMethod | null): boolean {
	if (!method) {
		return false;
	}

	if (typeof method !== 'string') {
		return false;
	}

	return httpMethods.has(method);
}
