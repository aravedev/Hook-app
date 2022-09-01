import React, { useState } from "react";

export const TodoAdd = (props) => {
  const [task, setTask] = useState("");

  function onSubmit(event) {
    event.preventDefault();
  }

  function onTask(event) {
    const task = event.target.value;
    setTask(task);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          onChange={(event) => onTask(event)}
          type="text"
          placeholder="Que hay que hacer?"
          className="form-control"
        />

        <button
          type="submit"
          className="btn btn-primary mt-2"
          onClick={() => props.handleNewTodo(task)}
        >
          Agregar
        </button>
      </form>
    </>
  );
};
