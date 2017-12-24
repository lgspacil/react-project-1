import React, { Component } from 'react';

class ProjectItem extends Component {

    deleteProject(id){
        console.log('test');
        console.log('the id is ', id);
        this.props.onDeleted(id);
    }

  render() {
    return (
      <li className="Project">
       <strong>{this.props.item.title}</strong>: {this.props.item.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.item.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
