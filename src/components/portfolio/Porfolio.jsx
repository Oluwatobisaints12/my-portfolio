import React from 'react'
import "./portfolio.css"
import PORTFOLIO1 from "../../assets/conveneImg.jpeg"
import PORTFOLIO2 from "../../assets/pennytotsImg.jpeg"
import PORTFOLIO3 from "../../assets/portfolio3.jpg"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO1} alt="portfolio1"  height="250px"/>
          </div>
          <h3>CONVENE WEBSITE</h3>
          <div className='portfolio__item-cta'>
            <a href="https://my-convene-app-2024.vercel.app" target="_blank" rel='noreferrer' className='btn ' >Github</a>
            {/* <a href="https://streetrates.info/" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a> */}
          </div>
            
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO2} alt="portfolio2" height="250px" />
          </div>
            <h3>PENNYTOTS MOBILE APP</h3>
            <div className='portfolio__item-cta'>
              <a href="https://app.pennytots.com" target="_blank" rel='noreferrer' className='btn '>Link</a>
              {/* <a href="https://ibkay-musica.vercel.app" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a> */}
            </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORTFOLIO3} alt="portfolio1" height="250px"/>
          </div>
            <h3>TUTERIA</h3>
            <div className='portfolio__item-cta'>
              <a href="#" rel='noreferrer' className='btn '>Github</a>
              <a href="https://tuteria.com/" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
            </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio
