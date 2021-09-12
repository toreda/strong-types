/**
 * CSS Property descriptions from w3 schools:
 * https://www.w3schools.com/cssref/css3_pr_text-decoration-line.asp
 */

/**
 * Supported values for CSS property 'text-decoration-line'.
 * Sets the kind of text decoration to use (like underline,
 * overline, line-through).
 *
 * @category CSS
 */
export type CSSTextDecorationLine =
	/** Default value. Specifies no line for the text-decoration */
	| 'none'
	/** Specifies that a line will be displayed under the text */
	| 'underline'
	/** Specifies that a line will be displayed over the text */
	| 'overline'
	/** Specifies that a line will be displayed through the text */
	| 'line-through'
	/** Sets this property to its default value. */
	| 'initial'
	/** Inherits this property from its parent element. */
	| 'inherit'
	/** Default value or no value will be used. */
	| '';
