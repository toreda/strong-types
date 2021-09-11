import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsTime<CallerType> = () => CallerType;

const maxTime = '^([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$';
const minTime = '^([01]?[0-9]|2[0-3]):[0-5][0-9]$';
// prettier-ignore
// eslint-disable-next-line
const dateTimeStr = '^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))T([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$';
// prettier-ignore
const dateStr = '^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$';

function isTime(currValue: string): boolean {
	if (typeof currValue !== 'string' || currValue.match(dateTimeStr) || currValue.match(dateStr)) {
		return false;
	}

	if (typeof currValue === 'string') {
		if (currValue.match(maxTime) || currValue.match(minTime)) {
			return true;
		}
		return false;
	}

	return true;
}

export function makeIsTime<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsTime<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isTime(curr);
		};

		const node = new RuleNode<string>('IS_TIME', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
