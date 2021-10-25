import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"
import { Route, Switch } from "react-router-dom"

import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar"

const TodoContainer = () => {
    //const [todos, setTodos] = useState([])

    function getInitialTodos() {
        const temp = localStorage.getItem("todos")
        const saveTodos = JSON.parse(temp)
        return saveTodos || []
    }

    const [todos, setTodos] = useState(getInitialTodos())

    const handleChange = id => {
        setTodos(prevState => prevState.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                }
            }
            return todo
        })
        )
    }

    const delTodo = id => {
        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id;
            }),
        ])
    }

    const addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos([...todos, newTodo]);
    }

    const setUpdate = (updateTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updateTitle
                }
                return todo
            })
        )
    }
    // useEffect(()=>{
    //     console.log("PHi Testing getItem on localStorage...")
    //     const temp = localStorage.getItem("todos")
    //     const loadedTodos = JSON.parse(temp)
    //     if(loadedTodos){
    //         setTodos(loadedTodos)
    //     }
    // }, [])

    useEffect(() => {
        console.log("PHi Testing setIntem on localStorage...")
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos])

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div className="container">
                        <div className="inner">
                            <Header />
                            <InputTodo addTodoProps={addTodoItem} />
                            <TodoList
                                todos={todos}
                                handleChangeProps={handleChange}
                                deleteTodoProps={delTodo}
                                setUpdateProps={setUpdate}
                            />
                        </div>
                    </div>
                </Route>

                <Route path="/about">
                    <About />
                </Route>
                {/*<Route path="/about" component={About} />*/}

                <Route path="*">
                    <NotMatch />
                </Route>
            </Switch>
        </>
    )

}
export default TodoContainer