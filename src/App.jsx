import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Skill from './components/Skill.jsx'
import Contact from './components/Contact.jsx'

function App() {
  const studentdetails = {
    name: "Dhairya Patel",
    about: "I'm 3rd year AIML Student and now i pursing B.Tech at Chandubhai.S.Patel Science & Technology University.I am a curious and hardworking student who enjoys learning new things and exploring technology. I have an interest in Artificial Intelligence and like working on small projects to improve my skills. I am always trying to grow, learn, and do better in everything I work on.",
    skill: ['Python', 'Machine Learning', 'Data Science']
  }
  return (
    <>
      <Header name={studentdetails.name} />
      <Routes>
        <Route path="/" element={<Home name={studentdetails.name} />} />
        <Route path="/about" element={<About about={studentdetails.about} />} />
        <Route path="/skills" element={<Skill skill={studentdetails.skill} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
