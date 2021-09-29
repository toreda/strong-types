import Big from 'big.js';

/**
 * Input arg type for math functions which use an underlying
 * Big data type, but accept various types and convert to Big
 * before performing maths.
 *
 * @category Maths
 */
export type BigArg = Big | number | string;
