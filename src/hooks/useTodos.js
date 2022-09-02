import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const useTodos = () => {
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

  // Creating Toggle function
  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
  };

  // Counting total tasks in todos array

  const todosCount = () => todos.length;

  // Counting total task remaining

  const pendingTodosCount = () => todos.filter((todo) => !todo.done).length;

  return {
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todos,
    todosCount,
    pendingTodosCount,
  };
};
