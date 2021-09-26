import type {Id} from '../id';
import {idMake} from '../id';

/**
 * @category Unique Identifiers
 */
export type AwsArn = Id;

/**
 *
 * @param fallback
 * @param initial
 * @returns
 *
 * @category Unique Identifiers
 */
export function awsArnMake(fallback: string, initial?: string | null): AwsArn {
	// Length constants specified at: https://docs.aws.amazon.com/IAM/latest/APIReference/API_Policy.html
	return idMake(fallback, initial, {
		minLength: 20,
		maxLength: 2048,
		contains: ['arn::']
	});
}
