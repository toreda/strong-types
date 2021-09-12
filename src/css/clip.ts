/**
 * CSS Property descriptions from w3 schools:
 * https://www.w3schools.com/cssref/pr_pos_clip.asp
 */

/**
 * Supported values for CSS property 'clip'.
 * Clip defines a rectangle to clip an absolutely positioned element.
 * The rectangle is specified as four coordinates, all from the top-left
 * corner of the element to be clipped.
 *
 * @category CSS
 */
export type CSSClip =
	/**  No clipping will be applied. This is default */
	| 'auto'
	/**  Clips an element. The only valid value is: rect (top, right, bottom, left) */
	| 'shape'
	/**  Sets this property to its default value. */
	| 'initial'
	/**  Inherits this property from its parent element. */
	| 'inherit'
	/** Default value or no value will be used. */
	| '';
