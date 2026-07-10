import { experience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">03.</span> Experience
        </h2>
        <div className="timeline">
          {experience.map((job) => (
            <article key={job.company} className="timeline__item">
              <div className="timeline__head">
                <h3>
                  {job.role} <span className="timeline__at">@ {job.company}</span>
                </h3>
                <span className="timeline__period">{job.period}</span>
              </div>
              <p className="timeline__loc">{job.location}</p>
              <ul>
                {job.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
