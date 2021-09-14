/**
 * HTTP Headers associated with browser and request security.
 *
 * @category HTTP
 */
export type HttpSecurityHeader =
	| 'Content-Security-Policy-Report-Only'
	| 'Content-Security-Policy'
	| 'Cross-Origin-Embedder-Policy'
	| 'Cross-Origin-Opener-Policy'
	| 'Cross-Origin-Resource-Policy'
	| 'Expect-CT'
	| 'Feature-Policy'
	| 'Origin-Isolation'
	| 'Strict-Transport-Security'
	| 'Upgrade-Insecure-Requests'
	| 'X-Content-Type-Options'
	| 'X-Download-Options'
	| 'X-Frame-Options'
	| 'X-Permitted-Cross-Domain-Policies'
	| 'X-Powered-By'
	| 'X-XSS-Protection';
