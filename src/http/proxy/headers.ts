import {HttpProxyHeader} from './header';

/**
 * Type for used to check & validate HTTP Proxy header keys.
 *
 * @category HTTP
 */
export type HttpProxyHeaders = Set<HttpProxyHeader>;

/**
 * Set used to check & validate HTTP Proxy header keys.
 *
 * @category HTTP
 */
export const httpProxyHeaders: HttpProxyHeaders = new Set<HttpProxyHeader>([
	'Forwarded',
	'X-Forwarded-For',
	'X-Forwarded-Host',
	'X-Forwarded-Proto',
	'Via'
]);
