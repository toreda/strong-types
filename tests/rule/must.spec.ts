import {TBRule} from '../../src/rule/rule';
import {TBRuleMust} from '../../src/rule/must';

describe('TBMust', () => {
	let instance: TBRuleMust;
	const rules: TBRule[] = [];

	beforeAll(() => {
		instance = new TBRuleMust(rules, null);
	});

	describe('Constructor', () => {
		it(`should initialize 'be' property`, () => {
			expect(instance.be).not.toBeUndefined();
		});

		it(`should initialize 'have' property`, () => {
			expect(instance.have).not.toBeUndefined();
		});

		it(`should initialize 'not' property`, () => {
			expect(instance.not).not.toBeUndefined();
		});

		it(`should initialize 'equal' property`, () => {
			expect(instance.equal).not.toBeUndefined();
		});

		it(`should initialize 'match' property`, () => {
			expect(instance.match).not.toBeUndefined();
		});
	});
});
