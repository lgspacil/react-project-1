import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import NavBar from './Components/NavBar';
import {Button} from 'react-bootstrap';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor() {
    super();
    //defining the state
    this.state = {
      projects: [],
      todos: [],
      information: { name: "testing", age: 10 }
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ todos: data }, function () {
          console.log(this.state);
        })
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err)
      }
    })
  }

  postInformation() {
    $.ajax({
      type: 'POST',
      url: 'http://rest.learncode.academy/api/learncode/friends',
      data: this.state.information,
      success: function (data) {
        console.log("I have added a friend!", data)
      }
    })
  }

getProjecsts(){
  this.setState({
    projects: [
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
    ]
  })
}

componentWillMount(){
  this.getProjecsts();
  this.getTodos();
  // uncomment the code below to add information to a server
  // this.postInformation();
}

componentDidMount(){
  this.getTodos();
}

handleAddProject(project){
  //received this information from the AddProject file below and was included in the prop
  // now we just add the project to the main state
  // states are immutable so we dont want to change it but we want to update it
  console.log(project);
  let projectz = this.state.projects;
  projectz.push(project);
  this.setState({ projects: projectz });
}

handleDeleteProject(id){
  console.log(id);
  let projects = this.state.projects;
  let index = projects.findIndex((x) => x.id === id);
  projects.splice(index, 1);
  this.setState({ projects: projects });
}

render() {
  return (
    <div className="App">
      <NavBar />
      <Button bsStyle='success'>Hello</Button>
      <AddProject addProject={this.handleAddProject.bind(this)} />
      <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
      <hr />
      <Todos todos={this.state.todos} />
    </div>
  );
}
}

export default App;
