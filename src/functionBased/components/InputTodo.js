import { FaPlusCircle } from "react-icons/fa"
import React, { useState, Component } from "react"

const InputTodo = props => {
    const [inputText, setInputText] = useState({
        title: "",
    })

    const onChange = e => {
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title);
            setInputText("")
        } else {
            alert("Please, write the title of the Item")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                className="input-text"
                placeholder="Add Todo ... "
                value={inputText.title}
                name="title"
                onChange={onChange}
            />
            <button className="input-submit">
                {/*<FaPlusCircle color="darkcyan" size="20px" />*/}
                <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }} />
            </button>
        </form>
    )
}
/*.input-submit svg {
    color: darkcyan;
    font-size: 20px;
    margin-top: 2px;
  }*/
export default InputTodo