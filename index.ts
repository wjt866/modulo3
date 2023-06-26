
function finiteAutomation<FsmState, FsmInput>(
  states: FsmState[],
  inputs: FsmInput[],
  initialState: FsmState,
  finalStates: FsmState[],
  transitionFunction: (state: FsmState, input: FsmInput) => FsmState
) {

  return function (inputs: FsmInput[]) {

    let state: FsmState = initialState;

    for (let index = 0; index < inputs.length; index++) {
      const nextState = transitionFunction(state, inputs[index]);
      state = nextState;
    }

    return state;
  };
}

export default finiteAutomation;
