import { projects } from '../data/portfolio.js'

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">04.</span> Projects
        </h2>
        <div className="projects__grid">
          {projects.map((p) => (
            <article key={p.name} className="project">
              <div className="project__top">
                <span className="project__icon">{'</>'}</span>
                <div className="project__links">
                  {p.links.map((l) => (
                    <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
              <h3 className="project__name">{p.name}</h3>
              <p className="project__period">{p.period}</p>
              <p className="project__blurb">{p.blurb}</p>
              <ul className="project__stack">
                {p.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
