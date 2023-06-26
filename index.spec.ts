import finiteAutomation from "./index";

describe("finite automation", () => {
  it('should return a function after initialisation', () => {
    const transitionFunction = jest.fn((state: string, input: string) => state)  
    const inputs = ['0', '0', '0']
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
    const transitionFunction = jest.fn((state: string, input: string) => state)  
    const inputs = ['0', '0', '0']
    finiteAutomation(
        ["S0", "S1", "S2"],
        ["0", "1"], 
        "S0",
        ["S0", "S1", "S2"], 
        transitionFunction
      )(inputs)

      expect(transitionFunction).toBeCalledTimes(3);
  })
});
