import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { profile } from '../data/portfolio.js'

// WhatsApp notifications via CallMeBot (free). One-time setup on your phone:
//   1. Save +34 644 51 95 23 as a contact (CallMeBot).
//   2. WhatsApp it: "I allow callmebot to send me messages"
//   3. It replies with your personal apikey — paste it below.
// Then every form submit pings your WhatsApp at the number below.
const WHATSAPP_PHONE = '916009780633' // +91 6009780633, international format, no +
const CALLMEBOT_APIKEY = '' // paste your CallMeBot apikey here to enable WhatsApp alerts

// Optional fallback: a Formspree endpoint (https://formspree.io/f/abcdwxyz)
// used only if no WhatsApp key is set. Empty => pre-filled mailto draft.
const FORM_ENDPOINT = ''

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (CALLMEBOT_APIKEY) {
      setStatus('sending')
      const text = `New portfolio message\nFrom: ${form.name} (${form.email})\n\n${form.message}`
      const url = `https://api.callmebot.com/whatsapp.php?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
        text,
      )}&apikey=${CALLMEBOT_APIKEY}`
      try {
        await fetch(url, { mode: 'no-cors' })
        setStatus('sent')
      } catch {
        setStatus('error')
      }
    } else if (FORM_ENDPOINT) {
      setStatus('sending')
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        setStatus(res.ok ? 'sent' : 'error')
      } catch {
        setStatus('error')
      }
    } else {
      const subject = encodeURIComponent(`Portfolio hello from ${form.name || 'someone'}`)
      const body = encodeURIComponent(
        `${form.message}\n\nFrom: ${form.name} (${form.email})`,
      )
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('sent')
    }
  }

  return createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal__card" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {status === 'sent' ? (
          <div className="modal__done">
            <h3>Thanks!</h3>
            <p>
              {CALLMEBOT_APIKEY || FORM_ENDPOINT
                ? "Your message is on its way. I'll get back to you soon."
                : "Your email draft is ready in your mail app. Hit send and I'll reply soon."}
            </p>
            <button className="btn btn--primary" onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <form className="modal__form" onSubmit={submit}>
            <h3>Say hello</h3>
            <p className="modal__lead">
              Tell me a bit about the role or what's on your mind.
            </p>
            <label>
              Name
              <input
                type="text"
                required
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                required
                value={form.email}
                onChange={update('email')}
                placeholder="you@company.com"
              />
            </label>
            <label>
              Message
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={update('message')}
                placeholder="Hi Nikita, we're hiring for..."
              />
            </label>
            {status === 'error' && (
              <p className="modal__error">
                Something went wrong. Please email me directly.
              </p>
            )}
            <button
              className="btn btn--primary btn--lg"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body,
  )
}
