import React from "react";

export const TodoList = (props) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between">
        <span className="align-self-center">{props.info.description}</span>
        <button className="btn btn-danger">Borrar</button>
      </li>
    </>
  );
};
