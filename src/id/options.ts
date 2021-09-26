/**
 * Configuration options used when creating a Strong Id.
 *
 * @category Strings
 */
export interface IdOptions {
	/**
	 * Max allowed Id length. Ids above max len are rejected.
	 * No max length enforced when maxLength is not set.
	 */
	maxLength?: number;
	/**
	 * Min allowed Id length. Ids below min len are rejected.
	 * Value must be >= 1. No Min length enforced when not set.
	 */
	minLength?: number;
	/**
	 * Substring or substrings required in Id to be valid. When
	 * `contains` is an array, Ids which do not contain all substrings
	 * are rejected.
	 */
	contains?: string | string[];
}
