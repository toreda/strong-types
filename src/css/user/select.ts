/**
 * CSS Property descriptions from w3 schools:
 * https://www.w3schools.com/cssref/css3_pr_user-select.asp
 */

/**
 * Supported values for CSS property 'user-select'.
 * Specifies whether the text of an element can be selected.
 *
 * @category CSS
 */
export type CSSUserSelect =
	/**  Default. Text can be selected if the browser allows it */
	| 'auto'
	/**  Prevent text selection */
	| 'none'
	/**  The text can be selected by the user */
	| 'text'
	/**  Text selection is made with one click instead of a double-click */
	| 'all'
	/**  Default value or no value will be used. */
	| '';
