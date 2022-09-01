import React from "react";
import ReactDOM from "react-dom/client";
import { CallbackHook } from "./06-memos/CallbackHook";
import { Padre } from "./07-tarea-memo/Padre";
import { TodoApp } from "./08-useReducer/TodoApp";
//import { MemoHook } from "./06-memos/MemoHook";
import "./index.css";
//import HooksApp from "./HooksApp";
//import { CounterApp } from "./01-useState/CounterApp";
//import CustomHookCounterApp from "./01-useState/CustomHookCounterApp";
//import SimpleForm from "./02-useEffect/SimpleForm";
//import FormWithCustomHooks from "./02-useEffect/FormWithCustomHooks";
//import MultipleCustomHooks from "./03-examples/MultipleCustomHooks";
//import { FocusScreen } from "./04-useRef/FocusScreen";
//import Layout from "./05-useLayoutEffect/Layout";
//import { Memorize } from "./06-memos/Memorize";
//import "./08-useReducer/intro-reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <TodoApp />
  //</React.StrictMode>
);
