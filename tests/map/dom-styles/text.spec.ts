import {CSSText} from '../../../src/css/text';
import {Strong} from '../../../src/strong';

const EXPECTED_STRONG_PROPERTIES = [
	{name: 'decoration', expectedValueType: 'string', expectedValue: 'none'},
	{name: 'shadow', expectedValueType: 'string', expectedValue: '0'}
];

describe('CSSText', () => {
	let instance: CSSText;

	beforeAll(() => {
		instance = new CSSText();
	});

	describe('Constructor', () => {
		for (const prop of EXPECTED_STRONG_PROPERTIES) {
			describe(`strong property ${prop.name}`, () => {
				it(`should be a function`, () => {
					expect(instance).toHaveProperty(prop.name);
					expect(typeof instance[prop.name]).toBe('function');
				});

				it(`should have initial value '${prop.expectedValue}'`, () => {
					const strongType = instance[prop.name] as Strong<unknown>;
					const result = strongType();
					expect(typeof result).toBe(prop.expectedValueType);
					expect(result).toBe(prop.expectedValue);
				});
			});
		}
	});
});
