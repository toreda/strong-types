import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';
import {URL} from 'url';

export type IsUrl<CallerType> = () => CallerType;

function isUrl(currValue: string): boolean {
	if (typeof currValue !== 'string') {
		return false;
	}

	const pieces = currValue.split('http://');
	const segment = currValue.split('https://');

	if (pieces[1] === '' || segment[1] === '') {
		return false;
	}

	let result = false;
	try {
		const url = new URL(currValue);
		result = true;
	} catch (e) {
		result = false;
	}

	return result;
}

export function makeIsUrl<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsUrl<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isUrl(curr);
		};

		const node = new RuleNode<string>('IS_URL', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
