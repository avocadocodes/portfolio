import { useEffect, useState } from 'react'

// Podium-style entry counter: fills 0 -> 100%, then slides up to reveal the site.
export default function Preloader() {
  const [count, setCount] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    let n = 0
    const id = setInterval(() => {
      n = Math.min(100, n + Math.floor(Math.random() * 8) + 4)
      setCount(n)
      if (n >= 100) {
        clearInterval(id)
        setTimeout(() => setExiting(true), 300)
        setTimeout(() => {
          setGone(true)
          document.body.style.overflow = ''
        }, 1150)
      }
    }, 55)
    return () => {
      clearInterval(id)
      document.body.style.overflow = ''
    }
  }, [])

  if (gone) return null

  return (
    <div className={`preloader ${exiting ? 'preloader--exit' : ''}`} aria-hidden="true">
      <div className="preloader__inner">
        <span className="preloader__label">Loading</span>
        <span className="preloader__count">{count}%</span>
      </div>
      <div className="preloader__bar" style={{ transform: `scaleX(${count / 100})` }} />
    </div>
  )
}
