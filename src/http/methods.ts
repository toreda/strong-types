import {HttpMethod} from './method';

/**
 * Type for used to check & validate HTTP Methods.
 *
 * @category HTTP
 */
export type HttpMethods = Set<HttpMethod>;

/**
 * Set of supported HTTP request methods.
 *
 * @category HTTP
 */
export const httpMethods = new Set<HttpMethod>([
	'CONNECT',
	'DELETE',
	'GET',
	'HEAD',
	'OPTIONS',
	'PATCH',
	'POST',
	'PUT',
	'TRACE'
]);
