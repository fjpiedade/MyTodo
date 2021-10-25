import React from "react"

import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    state = {
        editing: false,
    }

    handleEditing = () => {
        this.setState({
            editing: true,
        })
        //console.log("edit mode activated")
    }

    handleUpdatedDone = event => {
        if (event.key === "Enter") {
            this.setState({ editing: false })
        }
        //console.log(event.key)
    }
    render() {
        const { completed, title, id } = this.props.todo

        const completedStyles = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={completed}
                        //onChange={()=>console.log("clicked")}
                        onChange={() => this.props.handleChangeProps(id)}
                    />
                    <button onClick={() => this.props.deleteTodoProps(id)}>
                        Delete
                </button>
                    <span style={completed ? completedStyles : null}>{title}</span>
                </div>
                <input
                    type="text"
                    style={editMode}
                    className={styles.textInput}
                    value={title}
                    onChange={e => {
                        this.props.setUpdateProps(e.target.value, id)
                        //console.log(e.target.value, id)
                    }}
                    onKeyDown={this.handleUpdatedDone}
                />
            </li>

        )
    }
    componentWillUnmount(){
        console.log("Cleaning up ...")
    }
}

// function TodoItem(props) {
//     return <li>{props.todo.title}</li>
// }

export default TodoItem;