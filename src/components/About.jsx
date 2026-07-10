import { about, education } from '../data/portfolio.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">01.</span> About
        </h2>
        <div className="about__grid">
          <div className="about__text">
            {about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <aside className="about__card">
            <h3>Education</h3>
            <p className="about__school">{education.school}</p>
            <p className="about__degree">{education.degree}</p>
            <p className="about__muted">{education.period}</p>
            <p className="about__muted">{education.score}</p>
          </aside>
        </div>
      </div>
    </section>
  )
}
