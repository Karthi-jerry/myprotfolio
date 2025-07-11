import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Online Notes App',
      description: 'A full-stack app built with React and Spring Boot to Add ,And Delete, Color Greantiant .',
      github: 'https://github.com/karthi-jerry/online-notes-frontend ',
      
      
    },
    {
      title: 'Todo App',
      description: 'A simple todo app built with React and local storage.',
      github: 'https://github.com/karthi-jerry/todolistproject',
      demo: 'https://karthi-jerry.github.io/todolistproject/',
    },
    {
      title: 'Personal Portfolio',
      description: 'This portfolio site built using React, showcasing my projects and skills.',
      github: 'https://github.com/karthi-jerry/myprotfolio',
      demo: '',
    },
  ];

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
