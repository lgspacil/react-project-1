import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor(){
    super();
    //defining the state
    this.state = {
      projects: [],
      todos: []
    }
  }

  getTodos(){
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err)
      }
    })

  }

  getProjecsts(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        id: uuid.v4(),
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        id: uuid.v4(),
        title: 'Ecommerce Shopping Cart Website',
        category: 'Web Development'
      }
    ]})
  }

  componentWillMount(){
    this.getProjecsts();
    this.getTodos();
  }

  componentDidMount(){
    this.getTodos();
  }

  handleAdProject(project){
    //recived this information from the AddProject file below and was included in the prop
    // now we just add the project to the main state
    // states are immutable so we dont want to change it but we want to update it
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});

  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex((x) => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
       <AddProject addProject={this.handleAdProject.bind(this)}/>
       <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects}/>
       <hr />
       <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
