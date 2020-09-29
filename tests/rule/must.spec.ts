import {TBRule} from '../../src/rule/rule';
import {TBRuleMust} from '../../src/rule/must';

describe('TBMust', () => {
	let instance: TBRuleMust;
	const rules: TBRule[] = [];

	beforeAll(() => {
		instance = new TBRuleMust(rules, null);
	});

	beforeEach(() => {
		rules.length = 0;
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

		it('should push a rule to rules array when parentRule argument is null', () => {
			expect(rules).toHaveLength(0);
			const custom = new TBRuleMust(rules, null);
			expect(rules).toHaveLength(1);
		});

		it('should not push parentRule to rules array when provided', () => {
			const rule = new TBRule();
			expect(rules).toHaveLength(0);
			const custom = new TBRuleMust(rules, rule);
			expect(rules).toHaveLength(0);
		});
	});
});
