/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2022 Toreda, Inc.
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
 * Identifies build type or target environment.
 *
 * @category Build
 */
export type Env =
	/** Development build. Often includes extra logging, debug symbols.*/
	| 'dev'
	/** QA Build or Env for Quality Assurance teams. Generally identical to prod or
	 * close to live but with extra debug or admin tools enabled which would always
	 * be disabled in prod. */
	| 'qa'
	/** Alias for prod, but is the preferred nomenclature for certain products
	 * or teams insteead of 'prod'. Server-side data is commonly close but not
	 * identical to stage or live. */
	| 'live'
	/** Production env generally live to all users. */
	| 'prod'
	/** Pre-deployment env or branch where builds go for a final check before prod.
	 * For live apps (apps, games, sites), env data is ideally identical to prod.*/
	| 'stage';
