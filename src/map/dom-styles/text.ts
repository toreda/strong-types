import {STRules, StrongType, makeStrong} from '@toreda/strong-types';

import {StrongMap} from '../map';

export class DOMStylesText extends StrongMap {
	public readonly decoration: StrongType<string>;
	public readonly shadow: StrongType<string>;

	constructor(enabled: boolean = true) {
		super(enabled);
		this.decoration = makeStrong<string>(null, 'none');
		this.shadow = makeStrong<string>(null, '0');
	}
}
