import './App.css'
import { Aboutme } from './components/Aboutme'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Sidebar } from './components/Sidebar'
import { Skills } from './components/Skills'

function App() {
  

  return (
    <>
      <Sidebar />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <div className="projects-footer-separator"></div>
      <Footer />
    </>
  )
}

export default App
