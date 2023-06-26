function finiteAutomation<FsmState, FsmInput>(
  states: FsmState[],
  inputsAlphabet: FsmInput[],
  initialState: FsmState,
  finalStates: FsmState[],
  transitionFunction: (state: FsmState, input: FsmInput) => FsmState,
) {
  // validate initialState against states
  if (!states.includes(initialState)) {
    throw new Error('Invalid initial state');
  }

  return function (inputs: FsmInput[]) {
    // validate inputs against input alphabet
    inputs.forEach((input) => {
      if (!inputsAlphabet.includes(input)) {
        throw new Error('Invalid input, input not included in input alphabet');
      }
    });

    let state: FsmState = initialState;

    for (let index = 0; index < inputs.length; index++) {
      const nextState = transitionFunction(state, inputs[index]);
      state = nextState;
    }

    if (!finalStates.includes(state)) {
      throw new Error(
        'State provided by transition function is not specified in finalStates',
      );
    }
    return state;
  };
}

export default finiteAutomation;
