import './Skills.css'
import reactIcon from '../assets/icons/React-icon.svg.png'
import tailwindIcon from '../assets/icons/Light.svg'
import routerIcon from '../assets/icons/0_KgNXU3tz-AOj2k4b.png'
import jsIcon from '../assets/icons/javascript-logo-javascript-icon-transparent-free-png (1).webp'
import nodeIcon from '../assets/icons/919825.png'
import expressIcon from '../assets/icons/express-js-logo-png_seeklogo-339850.png'
import postgresIcon from '../assets/icons/Postgresql_elephant.svg.png'

export const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-card">
        <h2 className="card-title">Frontend</h2>
        <div className="tech-cards">
          <div className="tech-card">
            <img src={reactIcon} alt="React JS" className="tech-icon" />
            <h3>React JS</h3>
          </div>
          <div className="tech-card">
            <img src={tailwindIcon} alt="Tailwind CSS" className="tech-icon" />
            <h3>Tailwind CSS</h3>
          </div>
          <div className="tech-card">
            <img src={routerIcon} alt="React Router" className="tech-icon" />
            <h3>React Router</h3>
          </div>
          <div className="tech-card">
            <img src={jsIcon} alt="JavaScript" className="tech-icon" />
            <h3>JavaScript</h3>
          </div>
        </div>
        
        <h2 className="card-title">Backend</h2>
        <div className="tech-cards">
          <div className="tech-card">
            <img src={nodeIcon} alt="Node JS" className="tech-icon" />
            <h3>Node JS</h3>
          </div>
          <div className="tech-card">
            <img src={expressIcon} alt="Express JS" className="tech-icon" />
            <h3>Express JS</h3>
          </div>

          <div className="tech-card">
            <img src={jsIcon} alt="JavaScript" className="tech-icon" />
            <h3>JavaScript</h3>
          </div>
          <div className="tech-card">
            <img src={postgresIcon} alt="PostgreSQL" className="tech-icon" />
            <h3>PostgreSQL</h3>
          </div>
        </div>
      </div>
    </div>
  )
}