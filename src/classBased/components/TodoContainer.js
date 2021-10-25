import React from "react"
import TodoList from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"

class TodoContainer extends React.Component {

    state = {
        todos: [],
        // todos: [
        //     {
        //         id: uuidv4(),
        //         title: "Setup development environment",
        //         completed: true
        //     },
        //     {
        //         id: uuidv4(),
        //         title: "Develop website and add content",
        //         completed: true
        //     },
        //     {
        //         id: uuidv4(),
        //         title: "Deploy to live Server",
        //         completed: false
        //     }
        // ]
    };

    handleChange = id => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => {
                    if (todo.id === id) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                        }
                    }
                    return todo
                }),
            }
        })

        // this.setState(prevState => ({
        //     todos: prevState.todos.map(todo => {
        //       if (todo.id === id) {
        //         return {...todo, completed: !todo.completed,}
        //       }
        //       return todo
        //     }),
        //   }))

        // this.setState({
        //         todos: this.state.todos.map( todo=>{
        //             if (todo.id === id){
        //                 todo.completed =! todo.completed;
        //             }
        //             return todo;
        //         })
        //     });

        //console.log("clicked", id);
    }

    delTodo = id => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
        //console.log("deleted", id);
    };

    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
        //console.log(title);
    };

    setUpdate = (updateTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updateTitle
                }
                return todo
            }),
        })
        //console.log(updateTitle, id)
    }
    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo addTodoProps={this.addTodoItem} />
                    <TodoList
                        todos={this.state.todos}
                        handleChangeProps={this.handleChange}
                        deleteTodoProps={this.delTodo}
                        setUpdateProps={this.setUpdate}
                    />
                </div>
            </div>
        )
    }
    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //         .then(response => response.json())
    //         .then(data => this.setState({ todos: data }));
    //     //.then(data => console.log(data));
    // }

    componentDidUpdate(prevProps, prevState){
        if(prevState.todos !== this.state.todos){
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos", temp)
        }
    }

    componentDidMount(){
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos){
            this.setState({
                todos: loadedTodos
            })
        }
    }
}

export default TodoContainer