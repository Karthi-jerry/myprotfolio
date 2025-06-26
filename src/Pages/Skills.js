import React from 'react'
import './Skills.css'

function Skills() {
  return (
    <div className='skills-container'>
        <h1>Skills</h1>

        <div className="skill-category">
        <h3>Frontend</h3>
        <ul>
          <li>React</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Backend</h3>
        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Database</h3>
        <ul>
          <li>MySQL</li>
        </ul>
      </div>

      <div className="skill-category">
        <h3>Tools & Others</h3>
        <ul>
          <li>Git & GitHub</li>
          <li>Postman</li>
          <li>VS Code</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills