/**
 * HTTP Headers associated with proxy requests.
 *
 * @category HTTP
 */
export type HttpProxyHeader =
	| 'Forwarded'
	| 'X-Forwarded-For'
	| 'X-Forwarded-Host'
	| 'X-Forwarded-Proto'
	| 'Via';
