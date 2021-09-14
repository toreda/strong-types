import {HttpRequestHeader} from './header';

/**
 * Type for used to check & validate common HTTP Request header keys.
 *
 * @category HTTP
 */
export type HttpRequestHeaders = Set<HttpRequestHeader>;

/**
 * Set used to check & validate common HTTP Request header keys.
 *
 * @category HTTP
 */
export const httpRequestHeaders: HttpRequestHeaders = new Set<HttpRequestHeader>([
	'Accept-Encoding',
	'Accept-Language',
	'Accept',
	'Cache-Control',
	'Connection',
	'Host',
	'If-Modified-Since',
	'If-None-Match',
	'Referer',
	'Upgrade-Insecure-Requests',
	'User-Agent'
]);
