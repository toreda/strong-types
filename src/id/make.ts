import {Id} from '../id';
import {IdOptions} from './options';
import {Rules} from '../rules';
import {createType} from '../create/type';
import {initialValue} from '../initial/value';

/**
 * Create a Strong Id type.
 * @param fallback
 * @param initial
 * @returns
 *
 * @category Strings
 */
export function idMake(fallback: string, value?: string | null, options?: IdOptions): Id {
	const rules = new Rules();

	if (options) {
		if (typeof options.maxLength === 'number') {
			rules.add().must.have.length.lessThanOrEqualTo(options.maxLength);
		}

		if (typeof options.minLength === 'number') {
			rules.add().must.have.length.greaterThanOrEqualTo(options.minLength);
		}

		if (typeof options.contains === 'string' || Array.isArray(options.contains)) {
			rules.add().must.contain.text(options.contains);
		}
	}

	rules.add().must.match.type.string();
	const typeId = options && typeof options.typeId === 'string' ? options.typeId : 'Id';

	return createType<string>(fallback, initialValue(value), rules, typeId);
}
