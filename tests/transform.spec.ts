import { ArmorKVP } from '../src/kvp';
import {ArmorKVPTransform} from '../src/transform';

describe('ArmorKVPTransform', () => {
	describe('Constructor', () => {
		it('should throw when fn argument is not provided', () => {
			expect(() => {
				const custom = new ArmorKVPTransform<string>(undefined as any);
			}).toThrow('ArmorKVPTransform init failed - fn argument missing.');
		});

		it('should set id when provided in options argument', () => {
			const fn = (value: string): string => { return value; };
			const sampleId = 'AAA_@@@@@33321__334';
			const custom = new ArmorKVPTransform<string>(fn, {
				id: sampleId
			});

			expect(custom.id).toBe(sampleId);
		});
	});
});
