import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../assets/my-pic4.jpeg"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Onifade Oluwatobi</h1>
        <div className="text-light">Front-end Developer</div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" /> 
        </div>
        
      </div>
    </header>
  )
}

export default Header