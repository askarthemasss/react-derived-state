# React Derived States

Project to understand how derived state works

- if we have state that's stored using a state hook that is derived from other state values or shared between different state values, that's almost always a sign of bad code.
- which is difficult to maintain.

- should always take derived state, like filteredItems in this example, move it out of our actual state and just calculate it based our state values