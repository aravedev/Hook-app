import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components-todo/TodoList";
import { TodoAdd } from "./components-todo/TodoAdd";
import { useEffect } from "react";

const initialState = [
  /*
  {
    id: new Date().getTime(),
    description: "Recolectar la piedra del alma",
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: "Recolectar la piedra del tiempo",
    done: false,
  },
  */
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const TodoApp = () => {
  // first: nuestro reducer, second: initialState, third: function iniciadora
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  // We are invoking a secondary effect, we need useEffect hook. Each time that "todos" change, useEffect runs and update the info in the local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);

  const handleNewTodo = (todo) => {
    // this is the payload or action :
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    // dispatch is the same as setTodos, we have just changed the name
    dispatch(action);
  };

  // Creating function that delete TODOs
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}></TodoList>
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
};
