import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { profile, heroTags } from '../data/portfolio.js'

function HeroTags() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const id = setInterval(
      () => setActive((a) => (a + 1) % heroTags.length),
      1400,
    )
    return () => clearInterval(id)
  }, [])

  return (
    <ul className="hero__tags">
      {heroTags.map((t, i) => (
        <li
          key={t}
          className={`hero__tag ${i === active ? 'hero__tag--active' : ''}`}
        >
          <span>[</span> {t} <span>]</span>
        </li>
      ))}
    </ul>
  )
}

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.55 })
    tl.from('.hero__statement .word__inner', {
      yPercent: 115,
      duration: 1,
      ease: 'power4.out',
      stagger: 0.07,
    })
    tl.from(
      '.hero__reveal',
      { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out', stagger: 0.12 },
      '-=0.6',
    )
    return () => tl.kill()
  }, [])

  const words = profile.statement.split(' ')

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__status hero__reveal">
          <i />
          {profile.availability}
        </div>
        <p className="hero__eyebrow hero__reveal">
          {profile.name} / {profile.title}
        </p>
        <h1 className="hero__statement">
          {words.map((w, i) => (
            <span className="word" key={i}>
              <span className="word__inner">{w}</span>
            </span>
          ))}
        </h1>
        <p className="hero__tagline hero__reveal">{profile.tagline}</p>

        <div className="hero__reveal">
          <HeroTags />
        </div>

        <div className="hero__meta hero__reveal">
          <span>{profile.location}</span>
        </div>

        <div className="hero__actions hero__reveal">
          <a className="btn btn--primary" href="#experience">
            View my work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in touch
          </a>
          <a
            className="btn btn--ghost"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="hero__socials hero__reveal">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>

      <div className="hero__scroll hero__reveal">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
