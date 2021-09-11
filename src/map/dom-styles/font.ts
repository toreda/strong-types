import {Strong, makeStrong} from '../../strong';

import {Rules} from '../../rules';
import {StrongMap} from '../../map';

export class DOMStylesFont extends StrongMap {
	public readonly color: Strong<string>;
	public readonly size: Strong<string>;
	public readonly family: Strong<string>;
	public readonly weight: Strong<string>;
	public readonly lineHeight: Strong<string>;
	public readonly stretch: Strong<string>;
	public readonly variant: Strong<string>;

	constructor() {
		super();

		const colorRules: Rules<string> = new Rules();
		colorRules.add().must.match.pattern.hexColor();
		this.color = makeStrong<string>('#FFFFFF', null, colorRules);
		this.size = makeStrong<string>('12px', null);
		this.family = makeStrong<string>('sans-serif', null);
		this.weight = makeStrong<string>('normal', null);
		this.lineHeight = makeStrong<string>('normal', null);
		this.stretch = makeStrong<string>('normal', null);
		this.variant = makeStrong<string>('normal', null);
	}
}
