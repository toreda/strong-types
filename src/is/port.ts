import {Rule} from '../rule';
import {RuleFn} from '../rule/fn';
import {RuleMods} from '../rule/mods';
import {RuleNode} from '../rule/node';
import {RuleNodeType} from '../rule/node/type';
import {isInteger} from './integer';

export type IsPort<CallerType> = () => CallerType;

export const isPort = (curr: number): boolean => {
	if (typeof curr !== 'number') {
		return false;
	}

	if (curr < 0) {
		return false;
	}

	if (curr > 65353) {
		return false;
	}

	return isInteger(curr);
};

//Must be an unsigned int (whole number).
//Must be from 0 to 65353 .
//port > 65353 is invalid.
//port < 0 is invalid.

export function makeIsPort<CallerType>(caller: CallerType, rule: Rule, mods: RuleMods): IsPort<CallerType> {
	return (): CallerType => {
		const fn: RuleFn<number> = (curr: number): boolean => {
			return isPort(curr);
		};

		const node = new RuleNode<number>('IS_PORT', RuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
