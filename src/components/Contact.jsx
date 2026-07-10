import { useState } from 'react'
import { profile } from '../data/portfolio.js'
import ContactModal from './ContactModal.jsx'

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }
  return (
    <button
      className={`copy-email ${copied ? 'copy-email--copied' : ''}`}
      onClick={copy}
    >
      {copied ? 'Copied!' : profile.email}
    </button>
  )
}

export default function Contact() {
  const [open, setOpen] = useState(false)

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
        <button className="btn btn--primary btn--lg" onClick={() => setOpen(true)}>
          Say hello
        </button>
        <div className="contact__links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <CopyEmail />
          <span>{profile.phone}</span>
        </div>
        <footer className="footer">
          Built with React and Vite by {profile.name}.
        </footer>
      </div>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
