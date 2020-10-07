import {STRules, StrongType, makeStrong} from '@toreda/strong-types';

import {StrongMap} from '../map';

export class DOMStylesFont extends StrongMap {
	public readonly color: StrongType<string>;
	public readonly size: StrongType<string>;
	public readonly family: StrongType<string>;
	public readonly weight: StrongType<string>;

	constructor(enabled?: boolean) {
		super();
		this.enabled(enabled);
		const colorRules: STRules<string> = new STRules();
		colorRules.add().must.match.pattern.hexColor();
		this.color = makeStrong<string>(null, '#FFFFFF', colorRules);
		this.size = makeStrong<string>(null, '12px');
		this.family = makeStrong<string>(null, 'sans-serif');
		this.weight = makeStrong<string>(null, 'normal');
	}
}
