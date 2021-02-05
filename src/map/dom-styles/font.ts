import {StrongType, makeStrong} from '../../strong-type';

import {STRules} from '../../rules';
import {StrongMap} from '../../map';

export class DOMStylesFont extends StrongMap {
	public readonly color: StrongType<string>;
	public readonly size: StrongType<string>;
	public readonly family: StrongType<string>;
	public readonly weight: StrongType<string>;
	public readonly lineHeight: StrongType<string>;
	public readonly stretch: StrongType<string>;
	public readonly variant: StrongType<string>;

	constructor(enabled?: boolean) {
		super();
		this.enabled(enabled);
		const colorRules: STRules<string> = new STRules();
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
