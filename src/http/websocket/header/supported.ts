import {HttpWebsocketHeader} from '../header';
import {httpWebsocketHeaders} from '../headers';

/**
 * Check whether provided string identifies a supported HTTP
 * Websocket header name.
 * @param key
 * @returns
 *
 * @category HTTP
 */
export function httpWebsocketHeaderSupported(key?: HttpWebsocketHeader | null): boolean {
	if (typeof key !== 'string') {
		return false;
	}

	return httpWebsocketHeaders.has(key);
}
