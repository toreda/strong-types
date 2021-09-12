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
 * @category Strong Map
 */
export class Styles extends StrongMap {
	public readonly zIndex: Int;
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
		this.text.r;
		this.opacity.reset();
		this.display.reset();
		this.width.reset();
		this.height.reset();
		this.clip.reset();
	}
}
