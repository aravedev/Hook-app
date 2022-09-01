import React from "react";
import useCounter from "../hooks/useCounter";

export default function CustomHookCounterApp() {
  // these variables can be found in useCounter.js
  const { counter, increment, decrease, resetCounter } = useCounter();

  return (
    <div>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(3)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => resetCounter()}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrease(5)}>
        -1
      </button>
    </div>
  );
}
