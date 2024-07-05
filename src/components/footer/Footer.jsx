import React from 'react'
import "./footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">TOBI</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/oluwatobi-saints-37679528a" target="_blank" rel='noreferrer'><BsLinkedin/> </a>
        <a href="https://github.com/Oluwatobisaints12" target="_blank" rel='noreferrer'> <FaGithub/></a>
        {/* <a href="https://twitter.com/ibkay998" target="_blank" rel='noreferrer'> <FaTwitter/></a> */}
        <a href="https://www.facebook.com/profile.php?id=100095527988314&mibextid=ZbWKwL" target="_blank" rel='noreferrer'> <FaFacebook/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; TOBICODE All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer