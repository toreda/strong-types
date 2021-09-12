import {Strong, makeStrong} from '../strong';

import {Rules} from '../rules';
import {StrongMap} from '../map';

/**
 * @category CSS
 */
export class CSSFont extends StrongMap {
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
		this.size = makeStrong<string>('12px');
		this.family = makeStrong<string>('sans-serif');
		this.weight = makeStrong<string>('normal');
		this.lineHeight = makeStrong<string>('normal');
		this.stretch = makeStrong<string>('normal');
		this.variant = makeStrong<string>('normal');
	}

	public reset(): void {
		this.color.reset();
		this.size.reset();
		this.family.reset();
		this.weight.reset();
		this.lineHeight.reset();
		this.stretch.reset();
		this.variant.reset();
	}
}
