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

import {Double, makeDouble} from './double';
import {Int, makeInt} from './int';
import {Strong, makeStrong} from './strong';
import {StrongString, makeString} from './string';

import {CSSBoxShadow} from './css/box/shadow';
import {CSSClip} from './css/clip';
import {CSSDisplay} from './css/display';
import {CSSFont} from './css/font';
import {CSSText} from './css/text';
import {CSSUnits} from './css/units';
import {CSSUserSelect} from './css/user/select';
import {StrongMap} from './map';

/**
 * @category Styles
 */
export class Styles extends StrongMap {
	public readonly zIndex: Int;
	/** Element opacity from 0 -> 1 */
	public readonly opacity: Double;
	public readonly width: Double;
	public readonly height: Double;
	public readonly font: CSSFont;
	public readonly text: CSSText;
	public readonly lineHeight: StrongString;
	public readonly top: Strong<CSSUnits>;
	public readonly left: Strong<CSSUnits>;
	public readonly right: Strong<CSSUnits>;
	public readonly bottom: Strong<CSSUnits>;
	public readonly background: StrongString;
	/** Specifies element's type of rendering box & display behavior. */
	public readonly display: Strong<CSSDisplay>;
	public readonly boxShadow: Strong<CSSBoxShadow>;
	public readonly clip: Strong<CSSClip>;
	public readonly userSelect: Strong<CSSUserSelect>;

	constructor() {
		super();

		this.font = new CSSFont();
		this.opacity = makeDouble(1);
		this.zIndex = makeInt(0);
		this.width = makeDouble(1);
		this.height = makeDouble(1);
		this.text = new CSSText();
		this.lineHeight = makeString('');
		this.background = makeString('');
		this.display = makeStrong<CSSDisplay>('');
		this.boxShadow = makeStrong<CSSBoxShadow>('');
		this.clip = makeStrong<CSSClip>('');
		this.top = makeStrong<CSSUnits>('');
		this.bottom = makeStrong<CSSUnits>('');
		this.left = makeStrong<CSSUnits>('');
		this.right = makeStrong<CSSUnits>('');
		this.userSelect = makeStrong<CSSUserSelect>('');
	}

	public reset(): void {
		this.font.reset();
		this.text.reset();
		this.opacity.reset();
		this.display.reset();
		this.width.reset();
		this.height.reset();
		this.clip.reset();
	}
}
