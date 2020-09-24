import {KVPOpEqualTo} from './operator/equal-to';
import KVPRuleBe from './be';
import KVPRuleChain from './chain';
import KVPRuleHave from './have';
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
