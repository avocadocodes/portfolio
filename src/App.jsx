import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Cursor from './components/Cursor.jsx'
import Preloader from './components/Preloader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'

gsap.registerPlugin(ScrollTrigger)

const REVEAL = [
  '.section__title',
  '.about__text p',
  '.about__card',
  '.skills__card',
  '.timeline__item',
  '.project',
  '.achievement',
  '.contact__lead',
  '.contact__links',
  '.footer',
].join(', ')

export default function App() {
  useEffect(() => {
    // Smooth inertia scrolling
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
    window.__lenis = lenis
    let raf
    const loop = (t) => {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    lenis.on('scroll', ScrollTrigger.update)

    // Scroll-triggered reveals
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(REVEAL)
      items.forEach((el) => {
        gsap.set(el, { opacity: 0, y: 44 })
        ScrollTrigger.create({
          trigger: el,
          start: 'top 88%',
          once: true,
          onEnter: () =>
            gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }),
        })
      })
      ScrollTrigger.refresh()
    })

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      delete window.__lenis
      ctx.revert()
    }
  }, [])

  return (
    <>
      <Cursor />
      <Preloader />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
