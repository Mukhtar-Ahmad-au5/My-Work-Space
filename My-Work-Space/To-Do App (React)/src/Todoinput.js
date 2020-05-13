import React, { Component } from 'react';

class Todoinput extends Component {

    render() {
        return (
            <div>
                <div className="mb-2 font-weight-lighter text-secondary">Add To-do</div>
                <input type="text" value={this.props.inputVal.title} onChange={(event)=>this.props.gettodo(event.target.value)} className="form-control mb-2" placeholder="Title"></input>
                <input type="date" value={this.props.inputVal.deadline} onChange={(event)=>this.props.getdeadline(event.target.value)} className="form-control mb-2" placeholder="Deadline"></input>
            </div>
        )
    }
}

export default Todoinput;