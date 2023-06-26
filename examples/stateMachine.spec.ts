import { stateMachine } from './stateMachine';

describe('mod-three FA', () => {
  it('should return S1 for input 1101', () => {
    expect(stateMachine(['1', '1', '0', '1'])).toBe('S1');
  });

  it('should return S2 for input 1110', () => {
    expect(stateMachine(['1', '1', '1', '0'])).toBe('S2');
  });
  it('should return S2 for input 11101', () => {
    expect(stateMachine(['1', '1', '1', '0', '1'])).toBe('S2');
  });

  it('should return S1 for input 11100', () => {
    expect(stateMachine(['1', '1', '1', '0', '0'])).toBe('S1');
  });

  it('should return S0 for input 1111', () => {
    expect(stateMachine(['1', '1', '1', '1'])).toBe('S0');
  });
});
