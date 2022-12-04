import type {HttpWebsocketHeader} from '../header';
import {httpWebsocketHeaders} from '../headers';

/**
 * Check whether provided string identifies a valid HTTP
 * Websocket header name.
 * @param key
 * @returns
 *
 * @category HTTP
 */
export function httpWebsocketHeaderValid(key?: HttpWebsocketHeader | null): boolean {
	if (typeof key !== 'string') {
		return false;
	}

	return httpWebsocketHeaders.has(key);
}
