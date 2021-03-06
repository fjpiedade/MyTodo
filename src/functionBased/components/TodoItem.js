import { FaTrash } from "react-icons/fa"
import React, { useState, useEffect } from "react"
import styles from "./TodoItem.module.css"

const TodoItem = props => {
    const [editing, setEditing] = useState(false)

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdatedDone = event => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }

    const completedStyles = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const { completed, title, id } = props.todo

    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    useEffect(()=>{
        return ()=>{
            console.log("PHi, Cleaning Up the Todos ...")
        }
    }, [])

    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}
                />
                <button onClick={() => props.deleteTodoProps(id)}>
                    <FaTrash style={{ color: "orangered", fontSize: "16px" }}/>
                </button>
                <span style={completed ? completedStyles : null}>{title}</span>
            </div>
            <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={e => {
                    props.setUpdateProps(e.target.value, id)
                }}
                onKeyDown={handleUpdatedDone}
            />
        </li>

    )
}
// componentWillUnmount(){
//     console.log("Cleaning up ...")
// }


// function TodoItem(props) {
//     return <li>{props.todo.title}</li>
// }

export default TodoItem;