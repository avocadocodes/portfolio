import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Trailing dot that inverts over content and grows on interactive elements.
export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return

    gsap.set(el, { xPercent: -50, yPercent: -50 })
    const move = (e) =>
      gsap.to(el, { x: e.clientX, y: e.clientY, duration: 0.45, ease: 'power3.out' })
    const grow = () => el.classList.add('cursor--big')
    const shrink = () => el.classList.remove('cursor--big')

    window.addEventListener('mousemove', move)
    const targets = document.querySelectorAll('a, button, .copy-email')
    targets.forEach((t) => {
      t.addEventListener('mouseenter', grow)
      t.addEventListener('mouseleave', shrink)
    })
    document.body.classList.add('has-cursor')

    return () => {
      window.removeEventListener('mousemove', move)
      targets.forEach((t) => {
        t.removeEventListener('mouseenter', grow)
        t.removeEventListener('mouseleave', shrink)
      })
      document.body.classList.remove('has-cursor')
    }
  }, [])

  return <div ref={ref} className="cursor" aria-hidden="true" />
}
