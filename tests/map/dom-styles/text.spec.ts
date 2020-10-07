import {DOMStylesText} from '../../../src/map/dom-styles/text';

describe('DOMStylesText', () => {
	let instance: DOMStylesText;

	beforeAll(() => {
		instance = new DOMStylesText();
	});

	describe('Constructor', () => {
		it('should define property enabled as StrongType', () => {
			expect(instance).toHaveProperty('enabled');
			expect(typeof instance.enabled).toBe('function');
		});

		it('should initialize enabled to true', () => {
			expect(instance.enabled()).toBe(true);
		});
	});
});
