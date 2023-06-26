import finiteAutomation from "../index";

/**
 *  Example Implementation - MOD3 
 *  It's equivalent to the binary number modulo 3
 *  For example:
 *  1101 % 3 = 1
 *  Binary 13 modulus 3 is 1
 * 
 * This example provides the core inputs for the state machine
 * - It includes a transition function
 * - It provides the State and Input types as well as initialising a state machine
 * 
*/

type State = "S0" | "S1" | "S2";
export type Input = "0" | "1";

function transitionFunction(currentState: State, input: Input): State {
  if (currentState === "S0") {
    if (input === "0") {
      return "S0";
    }
    if (input === "1") {
      return "S1";
    }
  }
  if (currentState === "S1") {
    if (input === "0") {
      return "S2";
    }
    if (input === "1") {
      return "S0";
    }
  }
  if (currentState === "S2") {
    if (input === "0") {
      return "S1";
    }
    if (input === "1") {
      return "S2";
    }
  }

  throw new Error("State not defined");
}

export const stateMachine = finiteAutomation<State, Input>(
  ["S0", "S1", "S2"],
  ["0", "1"],
  "S0",
  ["S0", "S1", "S2"],
  transitionFunction
);
