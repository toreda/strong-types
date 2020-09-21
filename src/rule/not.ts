import {KVPOpEqualTo} from './operator/equal-to';
import KVPRuleBe from './be';
import KVPRuleChain from './rule-chain';
import KVPRuleHave from './have';
import KVPRuleOperator from './operator/operator';
import createEqualTo from './operator/equal-to';

export default class KVPRuleNot {
	public readonly be: KVPRuleBe;
	public readonly have: KVPRuleHave;
	public readonly equal: KVPOpEqualTo<KVPRuleNot>;

	private readonly negates: boolean;

	constructor(chain: KVPRuleChain) {
		this.negates = true;
		this.be = new KVPRuleBe(chain);
		this.have = new KVPRuleHave(chain);
		this.equal = createEqualTo<KVPRuleNot>(this, chain);
	}
}
