import {Rule} from '../../src/rule';
import {RuleMust} from '../../src/rule/must';

describe('STMust', () => {
	let instance: RuleMust;
	const rules: Rule[] = [];

	beforeAll(() => {
		instance = new RuleMust(rules, null);
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
			const custom = new RuleMust(rules, null);
			expect(rules).toHaveLength(1);
		});

		it('should not push parentRule to rules array when provided', () => {
			const rule = new Rule();
			expect(rules).toHaveLength(0);
			const custom = new RuleMust(rules, rule);
			expect(rules).toHaveLength(0);
		});
	});
});
