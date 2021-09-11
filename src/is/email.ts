import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';

export type IsEmail<CallerType> = () => CallerType;

function isEmail(currValue: string): boolean {
	if (typeof currValue !== 'string') {
		return false;
	}

	if (!currValue.trim()) {
		return false;
	}

	const pieces = currValue.split('@');
	if (pieces.length !== 2) {
		return false;
	}

	const name = pieces[0];
	const domain = pieces[1];

	if (domain.indexOf('.') === -1) {
		return false;
	}

	if (domain.length > 252) {
		return false;
	}

	if (!name.trim()) {
		return false;
	}

	if (name.length > 64) {
		return false;
	}

	if (name.length + domain.length + 1 > 254) {
		return false;
	}

	return true;
}

export function makeIsEmail<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsEmail<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<string> = (curr: string): boolean => {
			return isEmail(curr);
		};

		const node = new RuleNode<string>('IS_EMAIL', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
