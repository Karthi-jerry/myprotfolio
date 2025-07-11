import React from 'react'
import Karthick from '../photos/karthiJerry.jpg'

import './Home.css'

function Home() {
  return (
    <div className='mainContainer'>
       <div className='container1'>
       <h1>Hi, I'm Karthick 👋</h1>
       <p>A passionate Full Stack Developer</p>
       <p> I specialize in building modern web applications using React and Spring Boot. I love turning ideas into reality through clean and efficient code.</p>
       <a href="/Karthick_resume.pdf">
       <button className='resumeBtn'>Download Resume</button>
       </a>
        </div>
       <div className='Container2'>
        
        <img src={Karthick} alt='Karthi'  style={{ width: '200px', borderRadius: '50%' }}></img>
       
       </div>
    </div>
  )
}

export default Home