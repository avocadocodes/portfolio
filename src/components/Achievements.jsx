import { achievements } from '../data/portfolio.js'

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">05.</span> Achievements
        </h2>
        <div className="achievements__grid">
          {achievements.map((a) => (
            <div key={a.title} className="achievement">
              <h3>{a.title}</h3>
              <p>{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
