import React from "react";
import ReactDOM from "react-dom";
//import { BrowserRouter as Router } from "react-router-dom"
import { HashRouter as Router } from "react-router-dom"
//components file
import TodoContainer from "./functionBased/components/TodoContainer"
import "./functionBased/App.css"
import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";

//const element = <h1>Hi Ensei Mr. PHi</h1>

//ReactDOM.render(element, document.getElementById("root"))
//ReactDOM.render(<TodoContainer />, document.getElementById("root"))
/*
<React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>,
*/
ReactDOM.render(
    <Router>
        <TodoContainer />
    </Router>,
    document.getElementById("root")
)
