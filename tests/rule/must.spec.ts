import {KVPRule} from '../../src/rule/rule';
import {KVPRuleMust} from '../../src/rule/must';

describe('KVPMust', () => {
	let instance: KVPRuleMust;
	const rules: KVPRule[] = [];

	beforeAll(() => {
		instance = new KVPRuleMust(rules, null);
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
