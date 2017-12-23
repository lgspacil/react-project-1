import React, { Component } from 'react';
import TodosItem from './TodosItem';

class Todos extends Component {

  render() {
    let todoItems;
    if(this.props.todos){
        todoItems = this.props.todos.map((todo) => {
            // console.log(project);
            return <TodosItem key={todo.title} todo={todo} />
        })
    };

    return (
      <div className="Todos">
      <h3>To Do List</h3>
       {todoItems}
      </div>
    );
  }
}

export default Todos;
