import React, { Component } from "react"

class InputTodo extends Component{
    state ={
        title: "",
    };

    onChange = e =>{
        this.setState({
            //title: e.target.value
            [e.target.name]: e.target.value
        });
        //console.log("Hi Mr. PHi");
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()){
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: ""
            });
        }else{
            alert("Please, write the title of the Item")
        }

        
        //console.log(this.state.title);
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type="text" 
                    className="input-text"
                    placeholder="Add Todo ... " 
                    value={this.state.title} 
                    name="title"
                    onChange={this.onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo