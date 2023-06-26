# Module 3

## About

This project implements a Finite Automata which can be used to generate a finite
state machine (FSM).

## Project Set up

`nvm use`

`yarn install`

Check code coverage and examples:

`yarn test --coverage`

## Examples

There are two examples in the `examples/` directory for how to use generate a
FSM which show how to configure the parameters of the state machine. Both files
share the same state machine but one formats the input and output eg
`(input: string) => number` while the other provides it in a consumable array
format and only expects a state to be returned eg `['1', '1', '1', '1'] => 'S1'`

Example set up as found in 'stateMachine.ts':

```typescript
export const stateMachine = finiteAutomation<State, Input>(
  ['S0', 'S1', 'S2'],
  ['0', '1'],
  'S0',
  ['S0', 'S1', 'S2'],
  transitionFunction,
);
```

`examples/` demonstrates a transition function which implements 'modulo-three'
function on a set of binary inputs ('1' or '0')
