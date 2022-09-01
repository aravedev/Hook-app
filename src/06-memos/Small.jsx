import React from "react";
import { memo } from "react";

const Small = ({ value }) => {
  console.log("Renderizando :(");
  return <small>{value}</small>;
};

export default memo(Small);
