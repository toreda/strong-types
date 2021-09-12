import {StrongString, makeString} from '../string';

import {StrongMap} from '../map';

/**
 * @category CSS
 */
export class CSSText extends StrongMap {
	public readonly decoration: StrongString;
	public readonly shadow: StrongString;

	constructor() {
		super();

		this.decoration = makeString('none', null);
		this.shadow = makeString('0', null);
	}
}
