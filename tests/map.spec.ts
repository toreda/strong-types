import {MapJsonifier} from '../src/map/jsonifier';
import {MapParser} from '../src/map/parser';
import {StrongMap} from '../src/map';
import {TestMap} from './map/test-map';

describe('StrongMap', () => {
	let instance: StrongMap;

	beforeAll(() => {
		instance = new StrongMap();
	});

	describe('Constructor', () => {
		it('should not throw when no arguments provided', () => {
			expect(() => {
				new StrongMap();
			}).not.toThrow();
		});
	});

	describe('Expected Class Methods', () => {
		describe('parse', () => {
			it(`should call parse with args provided map and json args`, () => {
				const json = {};
				const map = new TestMap({});
				const spy = jest.spyOn(MapParser.prototype, 'parse');

				map.parse(json);

				expect(spy).toHaveBeenCalledWith(map, json);
			});
		});

		describe('jsonify', () => {
			it('should call jsonify with provided map', () => {
				const map = new TestMap({});
				const spy = jest.spyOn(MapJsonifier.prototype, 'jsonify');

				map.jsonify();

				expect(spy).toHaveBeenCalledWith(map);
			});
		});
	});
});
