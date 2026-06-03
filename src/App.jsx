import { useEffect } from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Stack    from './components/Stack'
import Projects from './components/Projects'
import Contact  from './components/Contact'
import Footer   from './components/Footer'
import { initGlobalSmoothScroll } from './utils/smoothScroll'

export default function App() {
  useEffect(() => {
    initGlobalSmoothScroll()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}