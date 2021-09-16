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
