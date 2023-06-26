import { stateMachine, Input } from './stateMachine';

/**
 *  Example Implementation - MOD3
 *  It's equivalent to the binary number modulo 3
 *  For example:
 *  1101 % 3 = 1
 *  Binary 13 modulus 3 is 1
 *
 * This example provides additional formatting and the checking of the types
 * - It accepts a string representing a binary number eg '1110' and returns a number
 * - It uses the same state machine set up as the 'simple' example
 *
 */

const stateToValue = {
  S0: 0,
  S1: 1,
  S2: 2,
};

function isInputArray(arr: unknown[]): arr is Input[] {
  if (arr.length === 0) {
    return false;
  }

  for (const item of arr) {
    if (typeof item !== 'string' || !['0', '1'].includes(item)) {
      return false;
    }
  }

  return true;
}

export const formattedExample = (inputString: string): number => {
  const inputs = inputString.split('');

  if (isInputArray(inputs)) {
    return stateToValue[stateMachine(inputs)];
  }

  throw new Error('bad inputs');
};
