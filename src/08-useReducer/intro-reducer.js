// creating a reducer: 1) Initial state

const initialState = [
  {
    id: 1,
    todo: "Recolectar la piedra del Alma",
    done: false,
  },
];

//

const todoReducer = (state = initialState, action = {}) => {
  // Retriving a new state

  if (action.type === "[TODO] add todo") {
    return [...state, action.payload];
  }
  return state;
};

// creating a new action
let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar la piedra del poder",
  done: false,
};

//

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
