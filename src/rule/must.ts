import {KVPOpEqualTo} from './operator/equal-to';
import {KVPOpHaveLength} from './operator/have-length';
import KVPRuleBe from './be';
import KVPRuleChain from './chain';
import KVPRuleHave from './have';
import KVPRuleMatch from './match';
import KVPRuleNot from './not';
import createEqualTo from './operator/equal-to';
import createHaveLength from './operator/have-length';

export default class KVPRuleMust {
	public readonly be: KVPRuleBe;
	public readonly have: KVPRuleHave;
	public readonly not: KVPRuleNot;
	public readonly equal: KVPOpEqualTo<KVPRuleMust>;
	public readonly match: KVPRuleMatch;
	public readonly haveLength: KVPOpHaveLength<KVPRuleMust>;

	constructor(chains: KVPRuleChain[], parentChain: KVPRuleChain | null) {
		const chain = parentChain ? parentChain : new KVPRuleChain();
		if (!parentChain) {
			chains.push(chain);
		}

		this.be = new KVPRuleBe(chain);
		this.have = new KVPRuleHave(chain);
		this.not = new KVPRuleNot(chain);
		this.equal = createEqualTo<KVPRuleMust>(this, chain);
		this.match = new KVPRuleMatch(chain);
		this.haveLength = createHaveLength<KVPRuleMust>(this, chain);
	}
}
