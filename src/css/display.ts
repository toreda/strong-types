/**
 * CSS Property descriptions from w3 schools:
 * https://www.w3schools.com/cssref/pr_class_display.asp
 */

/**
 * Supported values for CSS property 'display'.
 * The display property specifies the display behavior (the type of
 * rendering box) of an element.
 *
 * @category CSS
 */
export type CSSDisplay =
	/**  Displays an element as a block element (like <p>). Starts on
	 *   new line, and takes up the whole width */
	| 'block'
	/**  Makes the container disappear, making the child elements children
	 *   of the element the next level up in the DOM */
	| 'contents'
	/**  Displays an element as a block-level flex container */
	| 'flex'
	/**  Displays an element as a block-level grid container */
	| 'grid'
	/**  Inherits this property from its parent element. */
	| 'inherit'
	/**  Sets this property to its default value. */
	| 'initial'
	/**  Displays an element as an inline-level block container. The element
	 *   itself is formatted as an inline element, but you can apply height
	 *   and width values */
	| 'inline-block'
	/**  Displays an element as an inline-level flex container */
	| 'inline-flex'
	/**  Displays an element as an inline-level grid container */
	| 'inline-grid'
	/**  The element is displayed as an inline-level table */
	| 'inline-table'
	/**  Displays an element as an inline element (like <span>). Any height and
	 *   width properties will have no effect. */
	| 'inline'
	/**  Let the element behave like a <li> element */
	| 'list-item'
	/**  The element is completely removed */
	| 'none'
	/**  Displays an element as either block or inline, depending on context */
	| 'run-in'
	/**  Let the element behave like a <caption> element */
	| 'table-caption'
	/**  Let the element behave like a <td> element */
	| 'table-cell'
	/**  Let the element behave like a <colgroup> element */
	| 'table-column-group'
	/**  Let the element behave like a <col> element */
	| 'table-column'
	/**  Let the element behave like a <tfoot> element */
	| 'table-footer-group'
	/**  Let the element behave like a <thead> element */
	| 'table-header-group'
	/**  Let the element behave like a <tbody> element */
	| 'table-row-group'
	/**  Let the element behave like a <tr> element */
	| 'table-row'
	/**  Let the element behave like a <table> element */
	| 'table'
	/** Empty with no value. Default value will be used. */
	| '';
