import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

    deleteProject(id){
        //passing the functino onDelete up 
        //look for onDelete in the App.js file in the <Project />
        this.props.onDelete(id);
    }

  render() {
    let projectItems;
    if(this.props.projects){
        projectItems = this.props.projects.map((project) => {
            // console.log(project);
            return <ProjectItem onDeleted={this.deleteProject.bind(this)} key={project.title} item={project} />
        })
    };

    return (
      <div className="Projects">
      <h3>Latest Projects</h3>
       {projectItems}
      </div>
    );
  }
}

export default Projects;
