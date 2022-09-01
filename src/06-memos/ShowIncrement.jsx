import React from "react";

export const ShowIncrement = ({ increment }) => {
  console.log("volvi a cargar");
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
};
