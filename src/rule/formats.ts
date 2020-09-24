import KVPRule from './rule';
import KVPRuleFn from './fn';
import KVPRuleNode from './node';
import KVPRuleNodeType from './node-type';

export type KVPOpMatchFormats<CallerType> = (a: string[]) => CallerType;

const isFormatMatch = (currValue: string, targetFormats: string[]): boolean => {
	if (!Array.isArray(targetFormats)) {
		return false;
	}

	const currType = typeof currValue;

	for (const format of targetFormats) {
		if (typeof format !== 'string') {
			break;
		}

		if (currType === format) {
			return true;
		}
	}

	return false;
};

export default function createMatchFormats<CallerType>(
	caller: CallerType,
	rule: KVPRule
): KVPOpMatchFormats<CallerType> {
	function matchesFormats(targetFormats: string[]): CallerType {
		const fn: KVPRuleFn = (currValue: string) => {
			return isFormatMatch(currValue, targetFormats);
		};
		const node = new KVPRuleNode('MATCH_FORMATS', KVPRuleNodeType.CMP, fn);
		rule.add(node);

		return caller;
	}

	return matchesFormats;
}
