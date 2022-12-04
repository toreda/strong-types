/**
 *	MIT License
 *
 *	Copyright (c) 2022 Toreda, Inc.
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
 * OS Identifiers typically as returned by 'uname' on POSIX compatible
 * systems. Windows continues to be do its own things and be windows.
 *
 * @category System Info
 */
export type OS =
	/** All windows desktop family OS. */
	| 'windows'
	/** MacOS family based on darwin.
	 * Includes
	 *		Mac OS X Panther 10.3, PowerBook G4 (2004)
	 *		Mac OS X Snow Leopard 10.6, MacBook3,1 (Late 2007)
	 *		Mac OS X Lion 10.7.3 build 11D50, MacbookPro7,1 (Late 2010)
	 *		OS X Mountain Lion 10.8.3 build 12D78, MacbookPro10,1 (Mid 2012)
	 *		OS X Mavericks 10.9 build 13A598, MacbookPro5,1 (Mid 2009)
	 *		OS X Yosemite 10.10 build 14A298i, MacbookPro6,2 (Mid 2010)
	 *		OS X El Capitan 10.11 build 15A284, MacBookPro10,1 (Mid 2012)
	 *		macOS Sierra 10.12 build 16E195, MacBookPro12,1 (Early 2015)
	 *		macOS High Sierra 10.13.3 build 17D47, MacBookPro12,1 (Early 2015)
	 *		macOS Mojave 10.14.3 build 18D109
	 *		macOS Catalina 10.15.5 build 19F101
	 *		macOS Big Sur 11.0.1 build 20B29 on Apple M1
	 */
	| 'darwin'
	/** All distributions of Linux. */
	| 'linux'
	/** Android (DROID) family of operating systems. */
	| 'android'
	/** Amazon's FireOS - their Android fork for kindles. */
	| 'fireos'
	/**  */
	| 'all'
	| 'none';
