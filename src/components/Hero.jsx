import './Hero.css'
import icon1 from '../assets/icons/919825.png'
import icon2 from '../assets/icons/express-js-logo-png_seeklogo-339850.png'
import icon3 from '../assets/icons/Light.svg'
import icon4 from '../assets/icons/Postgresql_elephant.svg.png'
import icon5 from '../assets/icons/React-icon.svg.png'
import resume from '../assets/Resume_Huzaifa.pdf'

export const Hero = () => {
  return (
    <div className="hero-section" id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm Huzaifa</h1>
          <p className="hero-subtitle">Web Developer | React • Node.js • PostgreSQL</p>
          <p className="hero-description">"Turning ideas into responsive, functional web apps."</p>
          <div className="hero-buttons">
            <a href="https://github.com/huzu-glitch" target="_blank" rel="noopener noreferrer" className="hero-btn">
              View Projects
            </a>
            <a href={resume} download="Huzaifa_Amin_Resume.pdf" className="hero-btn">
              Download Resume
            </a>
          </div>
          <div className="scroll-indicator">
            <span>↓ Scroll to explore</span>
          </div>
        </div>
        <div className="hero-icons">
          <div className="icon-row top-row">
            <img src={icon1} alt="Icon 1" className="tech-icon" />
            <img src={icon2} alt="Icon 2" className="tech-icon" />
            <img src={icon3} alt="Icon 3" className="tech-icon" />
          </div>
          <div className="icon-row bottom-row">
            <img src={icon4} alt="Icon 4" className="tech-icon" />
            <img src={icon5} alt="Icon 5" className="tech-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}
