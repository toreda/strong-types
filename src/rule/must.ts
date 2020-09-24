import {KVPOpEqualTo} from './operator/equal-to';
import KVPRuleBe from './be';
import KVPRuleChain from './chain';
import KVPRuleHave from './have';
import KVPRuleMatch from './match';
import KVPRuleNot from './not';
import createEqualTo from './operator/equal-to';

export default class KVPRuleMust {
	public readonly be: KVPRuleBe;
	public readonly have: KVPRuleHave;
	public readonly not: KVPRuleNot;
	public readonly equal: KVPOpEqualTo<KVPRuleMust>;
	public readonly match: KVPRuleMatch;

	constructor(parentChain?: KVPRuleChain) {
		const chain = parentChain ? parentChain : new KVPRuleChain();
		this.be = new KVPRuleBe(chain);
		this.have = new KVPRuleHave(chain);
		this.not = new KVPRuleNot(chain);
		this.equal = createEqualTo<KVPRuleMust>(this, chain);
		this.match = new KVPRuleMatch(chain);
	}
}
