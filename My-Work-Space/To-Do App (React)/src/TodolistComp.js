import React, { Component } from 'react';

class TodolistComp extends Component {

    state = {
        dropdown: "all"
    }


    render() {
        return (
            <div className="conatiner shadow">
                <div className="mr-4 p-5">
                    <div className="text-secondary font-weight-lighter">To-do list Items</div>
                    <div class="dropdown text-center">
                        <button class="btn btn-sm btn-secondary dropdown-toggle mb-3" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tasks
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item text-secondary" href="#" onClick={() => this.setState({ dropdown: "all" })}>All</a>
                            <a class="dropdown-item text-secondary" href="#" onClick={() => this.setState({ dropdown: "completed" })}>Completed</a>
                            <a class="dropdown-item text-secondary" href="#" onClick={() => this.setState({ dropdown: "active" })}>Active</a>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {this.props.todoEntries.filter((todo, index) => {
                                console.log(todo)
                                if (this.state.dropdown === "all") {
                                    return true
                                }
                                if (this.state.dropdown === "completed") {
                                    return todo.isCompleted
                                }
                                if (this.state.dropdown === "active") {
                                    return !todo.isCompleted
                                }
                            })
                                .map((elem, index) => {
                                    return <li className={"text-secondary w3-animate-zoom alert list-unstyled " + (elem.isCompleted ? "alert-success" : "alert-danger")} key={index}><small>{elem.title} --- {elem.deadline} --- </small>
                                        <i class="fa fa-pencil-square-o" aria-hidden="true" onClick={() => this.props.setEditIndex(elem)}></i> --- <i class="fa fa-check-circle-o" aria-hidden="true" onClick={() => this.props.completed(elem)}></i> --- <i class="fa fa-trash" onClick={() => { this.props.deleteItem(elem) }} aria-hidden="true"></i>
                                    </li>
                                })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodolistComp;