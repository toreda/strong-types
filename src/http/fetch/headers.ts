import {HttpFetchHeader} from './header';

/**
 * Type for used to check & validate HTTP Fetch header keys.
 *
 * @category HTTP
 */
export type HttpFetchHeaders = Set<HttpFetchHeader>;

/**
 * Set used to check & validate HTTP Fetch header keys.
 *
 * @category HTTP
 */
export const httpFetchHeaders: HttpFetchHeaders = new Set<HttpFetchHeader>([
	'Sec-Fetch-Site',
	'Sec-Fetch-Mode',
	'Sec-Fetch-User',
	'Sec-Fetch-Dest'
]);
