import {HttpCorsHeader} from './header';

/**
 * Type for used to check & validate HTTP CORS header keys.
 *
 * @category HTTP
 */
export type HttpCorsHeaders = Set<HttpCorsHeader>;

/**
 * Set used to check & validate HTTP CORS header keys.
 *
 * @category HTTP
 */
export const httpCorsHeaders: HttpCorsHeaders = new Set<HttpCorsHeader>([
	'Access-Control-Allow-Origin',
	'Access-Control-Allow-Credentials',
	'Access-Control-Allow-Headers',
	'Access-Control-Allow-Methods',
	'Access-Control-Expose-Headers',
	'Access-Control-Max-Age',
	'Access-Control-Request-Headers',
	'Access-Control-Request-Method',
	'Origin',
	'Timing-Allow-Origin'
]);
