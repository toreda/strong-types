import {HttpWebsocketHeader} from './header';

/**
 * Type for used to check & validate HTTP Websocket header keys.
 *
 * @category HTTP
 */
export type HttpWebsocketHeaders = Set<HttpWebsocketHeader>;

/**
 * Set used to check & validate HTTP Websocket header keys.
 *
 * @category HTTP
 */
export const httpWebsocketHeaders: HttpWebsocketHeaders = new Set<HttpWebsocketHeader>([
	'Sec-WebSocket-Key',
	'Sec-WebSocket-Extensions',
	'Sec-WebSocket-Accept',
	'Sec-WebSocket-Protocol',
	'Sec-WebSocket-Version'
]);
