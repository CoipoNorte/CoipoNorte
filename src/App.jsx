import { useEffect } from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Stack    from './components/Stack'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import Footer   from './components/Footer'
import { initGlobalSmoothScroll } from './utils/smoothScroll'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  const revealRef = useScrollReveal()

  useEffect(() => {
    initGlobalSmoothScroll()
  }, [])

  return (
    <div ref={revealRef}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}