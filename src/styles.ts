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

import {CSSBoxShadow} from './css/box/shadow';
import {CSSClip} from './css/clip';
import {CSSDisplay} from './css/display';
import {CSSFont} from './css/font';
import {CSSText} from './css/text';
import {CSSUnits} from './css/units';
import {CSSUserSelect} from './css/user/select';
import type {Float} from './float';
import type {Int} from './int';
import type {Strong} from './strong';
import {StrongMap} from './map';
import {StrongTypeId} from '.';
import type {Text} from './text';
import {floatMake} from './float/make';
import {intMake} from './int/make';
import {strongMake} from './strong/make';
import {textMake} from './text/make';

/**
 * @category Styles
 */
export class Styles extends StrongMap {
	public readonly zIndex: Int;
	/** Element opacity from 0 -> 1 */
	public readonly opacity: Float;
	public readonly width: Float;
	public readonly height: Float;
	public readonly font: CSSFont;
	public readonly text: CSSText;
	public readonly lineHeight: Text;
	public readonly top: Strong<CSSUnits>;
	public readonly left: Strong<CSSUnits>;
	public readonly right: Strong<CSSUnits>;
	public readonly bottom: Strong<CSSUnits>;
	public readonly background: Text;
	/** Specifies element's type of rendering box & display behavior. */
	public readonly display: Strong<CSSDisplay>;
	public readonly boxShadow: Strong<CSSBoxShadow>;
	public readonly clip: Strong<CSSClip>;
	public readonly userSelect: Strong<CSSUserSelect>;
	public readonly typeId: StrongTypeId;

	constructor() {
		super();

		this.background = textMake('');
		this.bottom = strongMake<CSSUnits>('');
		this.boxShadow = strongMake<CSSBoxShadow>('');
		this.clip = strongMake<CSSClip>('');
		this.display = strongMake<CSSDisplay>('');
		this.font = new CSSFont();
		this.height = floatMake(1);
		this.left = strongMake<CSSUnits>('');
		this.lineHeight = textMake('');
		this.opacity = floatMake(1);
		this.right = strongMake<CSSUnits>('');
		this.text = new CSSText();
		this.top = strongMake<CSSUnits>('');
		this.userSelect = strongMake<CSSUserSelect>('');
		this.width = floatMake(1);
		this.zIndex = intMake(0);
		this.typeId = 'Styles';
	}

	public reset(): void {
		this.background.reset();
		this.bottom.reset();
		this.boxShadow.reset();
		this.clip.reset();
		this.display.reset();
		this.font.reset();
		this.height.reset();
		this.left.reset();
		this.lineHeight.reset();
		this.opacity.reset();
		this.right.reset();
		this.text.reset();
		this.top.reset();
		this.userSelect.reset();
		this.width.reset();
		this.zIndex.reset();
	}
}
