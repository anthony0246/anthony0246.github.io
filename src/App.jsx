import { useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import { useActiveSection } from './hooks/useActiveSection'

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'skills', 'contact']

export default function App() {
  const sectionIds = useMemo(() => SECTION_IDS, [])
  const activeSection = useActiveSection(sectionIds)

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
