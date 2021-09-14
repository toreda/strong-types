import {HttpCacheHeader} from './header';

/**
 * Type for used to check & validate Http Cache header Keys.
 *
 * @category HTTP
 */
export type HttpCacheHeaders = Set<HttpCacheHeader>;

/**
 * Set used to check & validate Http Cache header keys.
 *
 * @category HTTP
 */
export const httpCacheHeaders: HttpCacheHeaders = new Set<HttpCacheHeader>([
	'Age',
	'Cache-Control',
	'Clear-Site-Data',
	'Expires',
	'Pragma',
	'Warning'
]);
