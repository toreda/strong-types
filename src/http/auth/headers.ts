import {HttpAuthHeader} from './header';

/**
 * Set used to identify valid HTTP Auth Header keys.
 *
 * @category HTTP
 */
export type HttpAuthHeaders = Set<HttpAuthHeader>;

/**
 * Header set used to identify valid HTTP Auth header keys.
 *
 * @category HTTP
 */
export const httpAuthHeaders: HttpAuthHeaders = new Set<HttpAuthHeader>([
	'WWW-Authenticate',
	'Authorization',
	'Proxy-Authenticate',
	'Proxy-Authorization'
]);
