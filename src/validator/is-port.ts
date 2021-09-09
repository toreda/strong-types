import {STRule} from '../rule/rule';
import {STRuleFn} from '../rule/fn';
import {STRuleModifiers} from '../rule/modifiers';
import {STRuleNode} from '../rule/node';
import {STRuleNodeType} from '../rule/node-type';
import {isInteger} from './is-integer';

export type STOpIsPort<CallerType> = () => CallerType;

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

export function makeIsPort<CallerType>(
	caller: CallerType,
	rule: STRule,
	mods: STRuleModifiers
): STOpIsPort<CallerType> {
	return (): CallerType => {
		const fn: STRuleFn<number> = (curr: number): boolean => {
			return isPort(curr);
		};

		const node = new STRuleNode<number>('IS_PORT', STRuleNodeType.CMP, fn, mods.invert);
		rule.add(node);

		return caller;
	};
}
