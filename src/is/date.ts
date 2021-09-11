import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsDate<CallerType> = () => CallerType;

// prettier-ignore
// eslint-disable-next-line
const timeStr = 'T([01]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]';
const timeStr1 = 'T([01]?[0-9]|2[0-3]):[0-5][0-9]';
const timeStr2 = 'T([01]?[0-9]|2[0-3])';

function isDate(value: string): boolean {
	if (typeof value !== 'string') {
		return false;
	}

	const result = Date.parse(value);

	if (isNaN(result) || value.match(timeStr) || value.match(timeStr1) || value.match(timeStr2)) {
		return false;
	}

	return true;
}

export function makeIsDate<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsDate<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isDate(curr);
		};

		const node = new RuleNode<string>('IS_DATE', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
