import React, { Component } from 'react';
import InputComp from './InputComp'
import TodolistComp from './TodolistComp'
import './App.css';

class App extends Component {

  state = {
    todolist:[{
      title: "mukh",
      deadline: "2010-04-20",
      isCompleted: false
    },
    {
      title: "mukhar",
      deadline: "2010-04-20",
      isCompleted: true
    },{
      title: "mukh",
      deadline: "2010-04-20",
      isCompleted: false
    }],
    editIndex: -1
}

setEditIndex(todo){
    this.setState({
        editIndex: this.state.todolist.indexOf(todo)
    })
}

sentTodoToList(data) {
  let newtodolist = this.state.todolist.slice()
  if(this.state.editIndex<0){
    newtodolist.unshift(data)
      this.setState({
          todolist: newtodolist,
      })
  }
  else {
    newtodolist.splice(this.state.editIndex, 1, data)
    this.setState({
        todolist: newtodolist,
        editIndex: -1
    })
  }
}

deleteItem(todo) {
  this.setState({ todolist: this.state.todolist.filter((el, i) => i !== this.state.todolist.indexOf(todo)) })
}

completed(todo){
  let newtodolist = this.state.todolist.slice()
  todo.isCompleted = true
  newtodolist.splice(this.state.todolist.indexOf(todo), 1 ,todo)
  this.setState({
    todolist: newtodolist
  })
}

  render(){
    return (
      <div>
       <nav className="navbar bg-dark text-white"><a className="font-weight-lighter"><i class="fa fa-list-ol" aria-hidden="true"></i> To-do App</a></nav>
        <div className="row">
          <div className="col-md-3 m-5">
          <InputComp editTodo={this.state.todolist[this.state.editIndex]} sentTodoToList={(data)=>this.sentTodoToList(data)}/>
          </div>
          <div className="col-md-7 m-5">
          <TodolistComp completed={(todo)=>this.completed(todo)} setEditIndex={(todo)=>this.setEditIndex(todo)} todoEntries={this.state.todolist} deleteItem={(index)=>this.deleteItem(index)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
