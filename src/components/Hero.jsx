import { useEffect, useState } from 'react'
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
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__status">
          <i />
          {profile.availability}
        </div>
        <p className="hero__eyebrow">Hi, I'm</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">{profile.title}</h2>
        <p className="hero__tagline">{profile.tagline}</p>

        <HeroTags />

        <div className="hero__meta">
          <span>{profile.location}</span>
        </div>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
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

        <div className="hero__socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
