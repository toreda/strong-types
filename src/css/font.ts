/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2021 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */
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
