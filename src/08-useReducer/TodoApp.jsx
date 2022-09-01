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
    console.log({ todo });
  };

  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group">
            {todos.map((todo) => {
              return <TodoList key={todo.id} info={{ ...todo }}></TodoList>;
            })}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo}></TodoAdd>
        </div>
      </div>
    </>
  );
};
