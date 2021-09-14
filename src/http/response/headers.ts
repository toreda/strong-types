import {HttpResponseHeader} from './header';

/**
 * Type for used to check & validate common HTTP Request header keys.
 *
 * @category HTTP
 */
export type HttpResponseHeaders = Set<HttpResponseHeader>;

/**
 * Set used to check & validate common HTTP Request header keys.
 *
 * @category HTTP
 */
export const httpResponseHeaders: HttpResponseHeaders = new Set<HttpResponseHeader>([
	'Access-Control-Allow-Origin',
	'Connection',
	'Content-Encoding',
	'Content-Type',
	'Date',
	'ETag',
	'Keep-Alive',
	'Last-Modified',
	'Server',
	'Set-Cookie',
	'Transfer-Encoding',
	'Vary',
	'X-Backend-Server',
	'X-Cache-Info',
	'X-kuma-revision',
	'x-frame-options'
]);
