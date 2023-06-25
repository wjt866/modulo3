
type State = "S0" | "S1" | "S2";

function stateMachine(input: string, currentState?: State): State {
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
      return "S0";
    }
    if (input === "1") {
      return "S2";
    }
  }

  throw new Error("State not defined");
}

const stateToValue = {
  S0: 0,
  S1: 1,
  S2: 2,
};

function modThree(input: string): number {
  const inputs = input.split("");

  let state: State = "S0";

  for (let index = 0; index < inputs.length; index++) {
    const nextState = stateMachine(inputs[index], state);
    state = nextState;
  }

  return stateToValue[state];
}

export default modThree;
