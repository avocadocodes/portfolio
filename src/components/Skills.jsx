import { skills } from '../data/portfolio.js'

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">
          <span className="section__num">02.</span> Skills
        </h2>
        <div className="skills__grid">
          {skills.map((s) => (
            <div key={s.group} className="skills__card">
              <h3>{s.group}</h3>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
