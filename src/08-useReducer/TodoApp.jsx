import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components-todo/TodoList";
import { TodoAdd } from "./components-todo/TodoAdd";
import { useEffect } from "react";
import { useTodos } from "../hooks/useTodos";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    pendingTodosCount,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp {todosCount()}, <small>pendientes: {pendingTodosCount()}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          ></TodoList>
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
