import React, { Component } from 'react';
import Todoinput from './Todoinput';


class InputComp extends Component {

    state = {
        title: "",
        deadline: "",
        isCompleted: false
    }

    addTodo() {
        this.props.sentTodoToList(this.state)
        this.setState({
            title: "",
            deadline: "",
            isCompleted: false
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps!== this.props){
            this.setState(this.props.editTodo)
        }
    }

    render() {
        return (
            <div className="container p-5 shadow">
                <Todoinput inputVal={this.state} gettodo={(title) => this.setState({ title })} getdeadline={(deadline) => this.setState({ deadline })} />
                <button className="btn btn-sm btn-primary" onClick={() => this.addTodo()}>{this.props.editTodo ? "Save" : "Add To-do"}</button>
            </div>
        )
    }
}

export default InputComp;