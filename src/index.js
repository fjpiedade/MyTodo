import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
//components file
import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/App.css"

//const element = <h1>Hi Ensei Mr. PHi</h1>

//ReactDOM.render(element, document.getElementById("root"))
//ReactDOM.render(<TodoContainer />, document.getElementById("root"))
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)