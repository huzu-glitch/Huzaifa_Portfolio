import './Aboutme.css'
import Me from '../assets/aboutme.png'

export const Aboutme = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <div className="about-image">
          <img src={Me} alt="Profile" />
        </div>
        <div className="about-text">
          <h1 className="about-title">About me</h1>
          <p>I’m a passionate Web Developer with a focus on building clean, responsive, and user-friendly web applications. I enjoy working with modern technologies like React, Node.js, and PostgreSQL to bring ideas to life. I’m constantly exploring new tools and techniques to write better code and improve user experiences. My goal is to grow as a full-stack developer and contribute to meaningful, real-world projects.</p>
        </div>
      </div>
    </div>
  )
}