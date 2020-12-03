import {StrongBoolean, makeBoolean} from '../../src/types/boolean';

const MOCK_INITIAL = true;
const MOCK_FALLBACK_DEFAULT = false;

describe('StrongArray', () => {
	describe('Implementation', () => {
		it('should set value to initialValue argument', () => {
			const sampleInitial = false;
			const result = makeBoolean(sampleInitial, MOCK_INITIAL);
			expect(result()).toBe(sampleInitial);
		});
	});
});
