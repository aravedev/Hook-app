// "use" as prefix to indicate that it is a custom hook

import { useState } from "react";

const useCounter = (initialValue = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => setCounter(counter + value);

  const resetCounter = () => setCounter(initialValue);

  const decrease = (value = 1) => {
    if (counter === 0) return;
    setCounter(counter - value);
  };

  return {
    counter,
    increment,
    decrease,
    resetCounter,
  };
};

export default useCounter;
