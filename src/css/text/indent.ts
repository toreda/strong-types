/**
 * CSS Property descriptions from w3 schools:
 * https://www.w3schools.com/cssref/pr_text_text-indent.asp
 */

/**
 * Supported values for CSS property 'text-indent'.
 * Specifies the indentation of the first line in a text-block.
 *
 * @category CSS
 */
export type CSSTextIndent =
	/**  Defines a fixed indentation in px, pt, cm, em, etc. Default value is 0. */
	| 'length'
	/**  Defines the indentation in % of the width of the parent element */
	| '%'
	/**  Sets this property to its default value. */
	| 'initial'
	/**  Inherits this property from its parent element. */
	| 'inherit';
