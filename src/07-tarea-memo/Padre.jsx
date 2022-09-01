import Hijo from "./Hijo";
import { useState, useMemo, useCallback } from "react";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  const incrementar = useCallback((num) => {
    setValor((oldValue) => oldValue + num);
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
    </div>
  );
};

/*

Use "useMemo" in the child component, this is to memorize the actual value from "valor"
in the parent component use "useCallback" to avoid the program rederize the incrementar function
each time that is running the UI.

*/
