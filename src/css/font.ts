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

import {Defaults} from '../defaults';
import type {HexColorCode} from '../hex/color/code';
import {Rules} from '../rules';
import type {Strong} from '../strong';
import {StrongMap} from '../map';
import {hexColorCodeMake} from '../hex/color/code/make';
import {strongMake} from '../strong/make';

/**
 * @category CSS
 */
export class CSSFont extends StrongMap {
	public readonly color: HexColorCode;
	public readonly family: Strong<string>;
	public readonly lineHeight: Strong<string>;
	public readonly size: Strong<string>;
	public readonly stretch: Strong<string>;
	public readonly variant: Strong<string>;
	public readonly weight: Strong<string>;

	constructor() {
		super();

		const colorRules: Rules<string> = new Rules();
		colorRules.add().must.match.pattern.hexColor();
		this.color = hexColorCodeMake(Defaults.CSS.Font.Color);
		this.family = strongMake<string>(Defaults.CSS.Font.Family);
		this.lineHeight = strongMake<string>(Defaults.CSS.Font.LineHeight);
		this.size = strongMake<string>(Defaults.CSS.Font.Size);
		this.stretch = strongMake<string>(Defaults.CSS.Font.Stretch);
		this.variant = strongMake<string>(Defaults.CSS.Font.Variant);
		this.weight = strongMake<string>(Defaults.CSS.Font.Weight);
	}

	public reset(): void {
		this.color.reset();
		this.family.reset();
		this.lineHeight.reset();
		this.size.reset();
		this.stretch.reset();
		this.variant.reset();
		this.weight.reset();
	}
}
