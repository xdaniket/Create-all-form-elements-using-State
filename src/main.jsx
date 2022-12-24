import React from "react"; //*                            Not Mendatory.
import ReactDOM from "react-dom/client";
import App from "./App"; //*                              JSON List
import CounterForEvenOdd from "./components/CounterForEvenOdd";
import TodoApp from "./components/EditTodo";
import Log_in from "./components/Log_In_Form"; //*        Log_In_Form {Apply} = (<div style="margin-left: 10%; margin-top: 5%" id="root"></div>)
import Log_In from "./components/Log_In_Form2"; //*       With one onChange Function.
import FC from "./components/Log_In_FunCom";
import Profiles from "./components/Rendering";
import TodoApp1 from "./components/Todo_List";

ReactDOM.createRoot(document.getElementById("root")).render(<Log_in />);
