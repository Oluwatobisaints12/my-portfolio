import React from 'react'
import "./about.css"
import ME from "../../assets/my-pic4.jpeg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

    <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
          <img src={ME} alt="AboutImage" />
          </div>
          
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5> Experience</h5>
              <small>1+ Years Working</small>

            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>10+ Worldwide</small>

            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>

            </article> 
          </div>

          <p>
            Hey My name is Oluwatobi Onifade, I am an aspiring frontend developer, I am dedicated to creating seamless and responsive user experiences. You can rely on me to deliver projects that meet and exceed your expectations
          </p>

          <a href="#contact" className='btn btn-primary'>Lets Talk</a>

        </div>
    </div>
    </section>
  )
}

export default About
