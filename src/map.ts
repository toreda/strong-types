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

import {Data} from '@toreda/types';
import {MapJsonifier} from './map/jsonifier';
import {MapParser} from './map/parser';
import {StrongTypeId} from './strong/type/id';

/**
 * Map data structure for Strong Types. Supports recursive parsing of
 * JSON objects into the map, with property type matching and conversion
 * from Strong Map to json object.
 *
 * @category Strong Map
 */
export class StrongMap {
	public typeId: StrongTypeId;
	public readonly baseType: StrongTypeId;

	[index: string]: unknown;

	constructor() {
		this.typeId = 'StrongMap';
		this.baseType = 'StrongMap';
	}

	public parse(data?: null | unknown): void {
		if (!data) {
			return;
		}

		const parser = new MapParser();
		parser.parse(this, data);
	}

	public jsonify(): Data {
		const jsonifier = new MapJsonifier();
		return jsonifier.jsonify(this);
	}
}
