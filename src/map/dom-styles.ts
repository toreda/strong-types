import {StrongDouble, makeDouble} from '../types/double';
import {StrongInt, makeInt} from '../types/int';
import {StrongString, makeString} from '../types/string';

import {DOMStylesFont} from './dom-styles/font';
import {DOMStylesText} from './dom-styles/text';

export class DOMStyles extends Map {
	public readonly zIndex: StrongInt;
	public readonly opacity: StrongDouble;
	public readonly width: StrongDouble;
	public readonly height: StrongDouble;
	public readonly font: DOMStylesFont;
	public readonly text: DOMStylesText;
	public readonly lineHeight: StrongString;
	public readonly background: StrongString;

	constructor() {
		super();
		this.font = new DOMStylesFont();
		this.opacity = makeDouble(1, 1);
		this.zIndex = makeInt(0, 0);
		this.width = makeDouble(1, 1);
		this.height = makeDouble(1, 1);
		this.text = new DOMStylesText(true);
		this.lineHeight = makeString('', '');
		this.background = makeString('', '');
	}
}
