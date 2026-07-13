import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
// import { Link } from 'react-router-dom'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'

function App() {
  const [count, setCount] = useState(0)

  const studentdetails = {
    name: "Dhairya Patel",
    about: "I'm 3rd year AIML Student and now i pursing B.Tech at Chandubhai.S.Patel Science & Technology University.",
    skill: ['Python', 'Machine Learning']
  }
  return (
    <>
      <Header name={studentdetails.name} />
      <About about={studentdetails.about} />
      <Skill skill={studentdetails.skill} />
      <Footer />
    </>
  )
}

export default App
