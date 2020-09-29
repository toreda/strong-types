import {KVP} from '../src/kvp';
import {KVPTransform} from '../src/transform';

describe('KVPTransform', () => {
	describe('Constructor', () => {
		it('should throw when fn argument is not provided', () => {
			expect(() => {
				const custom = new KVPTransform<string>(undefined as any);
			}).toThrow('KVPTransform init failed - fn argument missing.');
		});

		it('should set id when provided in options argument', () => {
			const fn = (value: string): string => {
				return value;
			};
			const sampleId = 'AAA_@@@@@33321__334';
			const custom = new KVPTransform<string>(fn, {
				id: sampleId
			});

			expect(custom.id).toBe(sampleId);
		});
	});

	describe('Implementation', () => {
		describe('run', () => {
			it('should not throw when transform fn throws', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					throw new Error('woop woop');
				});

				expect(() => {
					const sampleVal = 'hello225425';
					const custom = new KVPTransform<string>(fn, {});
					custom.run(sampleVal);
				}).not.toThrow();
			});

			it('should return original value argument if transform fn throws', () => {
				const fn = jest.fn();
				fn.mockImplementation(() => {
					throw new Error('woop woop');
				});
				const sampleVal = 'hi441091';
				const custom = new KVPTransform<string>(fn, {});

				expect(custom.run(sampleVal)).toBe(sampleVal);
			});
		});
	});
});
