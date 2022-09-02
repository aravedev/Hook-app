import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components-todo/TodoList";
import { TodoAdd } from "./components-todo/TodoAdd";

const initialState = [
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
];

export const TodoApp = () => {
  // first: nuestro reducer, second: initialState, third: function
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    // this is the payload or action :
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    // dispatch is the same as setTodos, we have just changed the name
    dispatch(action);
  };

  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}></TodoList>
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
