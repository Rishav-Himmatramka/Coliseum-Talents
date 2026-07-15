import { useEffect, useRef, useState } from 'react'
import './ScrollTransition.css'

function lerp(a, b, t) {
  return a + (b - a) * Math.max(0, Math.min(1, t))
}

export default function ScrollTransition() {
  const sectionRef = useRef()
  const [prog, setProg] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const scrolled = -el.getBoundingClientRect().top
      const total = el.offsetHeight - window.innerHeight
      setProg(Math.max(0, Math.min(1, scrolled / total)))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Phase 1: Card slides up + de-rotates (0 → 0.45) ──
  const cardT = Math.max(0, Math.min(1, prog / 0.45))
  const cardY     = lerp(90, 0, cardT)      // vh: slides up from below
  const cardRot   = lerp(22, 0, cardT)      // deg: de-rotates to upright
  const cardScale = lerp(0.7, 1, cardT)
  const cardOp    = lerp(0, 1, Math.min(1, prog / 0.06))

  // ── Phase 2: Circle portal opens (0.50 → 1.0) ──
  const circleT   = Math.max(0, Math.min(1, (prog - 0.50) / 0.50))
  const circleR   = lerp(3, 155, circleT)   // % radius
  const contentOp = lerp(0, 1, Math.max(0, Math.min(1, (prog - 0.68) / 0.16)))

  return (
    <div className="st-section" ref={sectionRef}>
      <div className="st-sticky">

        {/* ── Layer 1: Rotating card ── */}
        <div
          className="st-card"
          style={{
            transform: `translateY(${cardY}vh) rotate(${cardRot}deg) scale(${cardScale})`,
            opacity: cardOp,
          }}
        >
          <div className="st-card-content">
            <p className="st-card-eyebrow">Coliseum Talents</p>
            <h2 className="st-card-heading">India's Most<br/>Inspiring<br/>Talent.</h2>
          </div>
        </div>

        {/* ── Layer 2: Circle reveal (About) ── */}
        <div
          className="st-circle-layer"
          style={{ clipPath: `circle(${circleR}% at 50% 50%)` }}
        >
          <div className="st-circle-bg" />
          <div className="st-circle-content" style={{ opacity: contentOp }}>
            <div className="gold-line" />
            <p className="eyebrow">About Coliseum Talents</p>
            <h2>We shape moments that feel elevated, intentional and unforgettable.</h2>
            <p>
              Founded by <strong>Anuj Agrawal</strong>, Coliseum Talents specialises in artist
              management, celebrity bookings, motivational speakers, sports icons, entertainers,
              and event consulting — delivering extraordinary talent solutions across India.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
