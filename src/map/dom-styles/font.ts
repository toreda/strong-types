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
		this.color = makeStrong<string>(null, '#FFFFFF', colorRules);
		this.size = makeStrong<string>(null, '12px');
		this.family = makeStrong<string>(null, 'sans-serif');
		this.weight = makeStrong<string>(null, 'normal');
		this.lineHeight = makeStrong<string>(null, 'normal');
		this.stretch = makeStrong<string>(null, 'normal');
		this.variant = makeStrong<string>(null, 'normal');
	}
}
