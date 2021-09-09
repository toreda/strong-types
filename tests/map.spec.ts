import {StrongMap} from '../src/map';
import {StrongMapJsonifier} from '../src/map/jsonifier';
import {StrongMapParser} from '../src/map/parser';
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
			it('should call parse with args (map, json, options)', () => {
				const json = {};
				const map = new TestMap({});
				const spy = jest.spyOn(StrongMapParser.prototype, 'parse');

				map.parse(json, {});

				expect(spy).toHaveBeenCalledWith(map, json, expect.anything());
			});
		});

		describe('jsonify', () => {
			it('should call jsonify with args (map, options)', () => {
				const map = new TestMap({});
				const spy = jest.spyOn(StrongMapJsonifier.prototype, 'jsonify');

				map.jsonify({});

				expect(spy).toHaveBeenCalledWith(map, expect.anything());
			});
		});
	});
});
