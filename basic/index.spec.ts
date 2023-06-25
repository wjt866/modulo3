import modThree from "./index";

describe("modulo 3", () => {
  it("should return 1 for input 1101", () => {
    
    expect(modThree('1101')).toBe(1)
  });
  it("should return 2 for input 1110", () => {
    
    expect(modThree('1110')).toBe(2)
    
  });
  it("should return 0 for input 1111", () => {

    expect(modThree('1111')).toBe(0)
  });
});

