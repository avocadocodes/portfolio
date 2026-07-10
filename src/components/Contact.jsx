import { profile } from '../data/portfolio.js'

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container contact">
        <h2 className="section__title section__title--center">
          <span className="section__num">06.</span> Get in touch
        </h2>
        <p className="contact__lead">
          I'm open to backend and full-stack roles. If you're hiring or just want
          to chat, my inbox is always open.
        </p>
        <a className="btn btn--primary btn--lg" href={`mailto:${profile.email}`}>
          Say hello
        </a>
        <div className="contact__links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <span>{profile.phone}</span>
        </div>
        <footer className="footer">
          Built with React and Vite by {profile.name}.
        </footer>
      </div>
    </section>
  )
}
