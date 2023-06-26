import { formattedExample } from './formattedExample';

describe('formatted example', () => {
  it('should return S1 for input 1101', () => {
    expect(formattedExample('1101')).toBe(1);
  });
  it('should return S2 for input 1110', () => {
    expect(formattedExample('1110')).toBe(2);
  });
  it('should return S0 for input 1111', () => {
    expect(formattedExample('1111')).toBe(0);
  });
  it('should reject bad input', () => {
    expect(() => formattedExample('1A111')).toThrow(/bad inputs/);
    expect(() => formattedExample(' 1111')).toThrow();
    expect(() => formattedExample('119')).toThrow();
    expect(() => formattedExample('O1111')).toThrow();
    expect(() => formattedExample('')).toThrow();
  });
});
