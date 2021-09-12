/**
 * CSS Property descriptions from w3 schools:
 * https://www.w3schools.com/cssref/pr_class_clear.asp
 */

/**
 * The clear property controls the flow next to floated elements.
 *
 * @category CSS
 */
export type CSSClear =
	/**  Default. The element is not pushed below left or right floated elements */
	| 'none'
	/**  The element is pushed below both left and right floated elements */
	| 'both'
	/**  Inherits this property from its parent element.*/
	| 'inherit'
	/**  Sets this property to its default value. */
	| 'initial'
	/**  The element is pushed below left floated elements */
	| 'left'
	/**  The element is pushed below right floated elements */
	| 'right';
