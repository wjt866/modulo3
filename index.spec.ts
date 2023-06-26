import finiteAutomation from "./index";

type State = "S0" | "S1" | "S2";
type Input = "0" | "1";

describe("finite automation", () => {
  it('should return a function after initialisation', () => {
    const transitionFunction = jest.fn((state: string, input: string) => state)  
    const fsm = finiteAutomation(
        ["S0", "S1", "S2"],
        ["0", "1"],
        "S0",
        ["S0", "S1", "S2"],
        transitionFunction
      )

      expect(fsm).toBeInstanceOf(Function);
  })
  it('should call the transition function for each input', () => {
    const transitionFunction = jest.fn((state: State, input: Input) => state)  
    const inputs: Input[] = ['0', '0', '0']
    finiteAutomation<State, Input>(
        ["S0", "S1", "S2"],
        ["0", "1"], 
        "S0",
        ["S0", "S1", "S2"], 
        transitionFunction
      )(inputs)

      expect(transitionFunction).toBeCalledTimes(3);
  })

  it('should validate the initial state', () => {
    const transitionFunction = jest.fn((state: string, input: string) => state)  
    const invalidInitialState = "X"

      expect(() => finiteAutomation(
        ["S0", "S1", "S2"],
        ["0", "1"],
        invalidInitialState,
        ["S0", "S1", "S2"], 
        transitionFunction
      )).toThrow(/Invalid initial state/);
  })

  it('should validate the input against the input alphabet', () => {
    const transitionFunction = jest.fn((state: string, input: string) => state)  
    const inputs = ['0', 'X', '0'] // invalid input
    const fsm = finiteAutomation(
        ["S0", "S1", "S2"],
        ["0", "1"],
        "S0",
        ["S0", "S1", "S2"], 
        transitionFunction
      )

      expect(() => fsm(inputs)).toThrow(/Invalid input, input not included in input alphabet/);
  })

  it('should validate the accepting/final state against the result of the transition function', () => {
    const transitionFunction = jest.fn((state: string, input: string) => 'invalid state')  
    const inputs = ['0', '0', '0']
    const fsm = finiteAutomation(
        ["S0", "S1", "S2"],
        ["0", "1"],
        "S0",
        ["S0", "S1", "S2"], 
        transitionFunction
      )

    expect(() => fsm(inputs)).toThrow(/State provided by transition function is not specified in finalStates/);
  })
});
