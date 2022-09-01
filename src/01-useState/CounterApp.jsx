import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  function add() {
    let copy = { ...state };
    copy.counter1 = copy.counter1 + 1;
    setCounter({ ...copy });
  }

  return (
    <>
      <h1>Counter:{state.counter1} </h1>
      <h1>Counter:{state.counter2} </h1>
      <h1>Counter:{state.counter3} </h1>
      <hr />
      <button type="button" className="btn btn-primary" onClick={add}>
        +1
      </button>
    </>
  );
};
