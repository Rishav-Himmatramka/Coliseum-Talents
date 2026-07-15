import { useEffect, useRef } from 'react'
import './Hero.css'

const OLISEUM = ['O','L','I','S','E','U','M']
const TALENTS = ['T','A','L','E','N','T','S']

export default function Hero() {
  const arc1Ref = useRef()
  const arc2Ref = useRef()
  const heroRef = useRef()
  const rafRef = useRef()
  const posRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 })

  // Cursor-following arc parallax
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect()
      posRef.current.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      posRef.current.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    }
    const animate = () => {
      const p = posRef.current
      p.x += (p.tx - p.x) * 0.06
      p.y += (p.ty - p.y) * 0.06

      // Both inner arcs drift TOGETHER toward cursor — outer C is static anchor
      const dx = p.x * 14
      const dy = p.y * 14
      if (arc1Ref.current) // middle C (r=74)
        arc1Ref.current.style.transform = `translate(${dx}px, ${dy}px)`
      if (arc2Ref.current) // inner C (r=62)
        arc2Ref.current.style.transform = `translate(${dx}px, ${dy}px)`
      rafRef.current = requestAnimationFrame(animate)
    }
    hero.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      hero.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-bg" />

      <div className="hero-center">
        <div className="hero-wordmark">

          {/* Row 1: C arc (last, dramatic) + O L I S E U M (staggered drop) */}
          <div className="wm-row-top">

            {/* C arc — drops in LAST after all letters */}
            <div className="wm-c-wrap wm-c-drop">
              <svg
                className="wm-c-svg"
                viewBox="0 0 220 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="cg" x1="0" y1="0" x2="220" y2="220" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f0d470"/>
                    <stop offset="100%" stopColor="#b8860b"/>
                  </linearGradient>
                </defs>
                {/* Outer C r=86 — STATIC ANCHOR, never moves */}
                <path
                  d="M 170.8,49.2 A 86,86 0 1,0 170.8,170.8"
                  stroke="url(#cg)" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.65"
                />

                {/* Middle C r=74 — floats toward cursor */}
                <g ref={arc1Ref}>
                  <path
                    d="M 165.0,60.5 A 74,74 0 1,0 165.0,159.5"
                    stroke="url(#cg)" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.82"
                  />
                </g>

                {/* Inner C r=62 — floats toward cursor (same as middle, perfectly aligned) */}
                <g ref={arc2Ref}>
                  <path
                    d="M 157.5,70.1 A 62,62 0 1,0 157.5,149.9"
                    stroke="url(#cg)" strokeWidth="14" strokeLinecap="round" fill="none"
                  />
                </g>
              </svg>
            </div>

            {/* O L I S E U M — each letter drops in with stagger */}
            <span className="wm-letters" aria-label="OLISEUM">
              {OLISEUM.map((letter, i) => (
                <span
                  key={i}
                  className="wm-letter"
                  style={{ '--letter-i': i }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </div>

          {/* Divider line — extends after letters finish */}
          <div className="wm-divider" />

          {/* T A L E N T S — each letter rises in after divider */}
          <span className="wm-talents-wrap" aria-label="TALENTS">
            {TALENTS.map((letter, i) => (
              <span
                key={i}
                className="wm-talent-letter"
                style={{ '--talent-i': i }}
              >
                {letter}
              </span>
            ))}
          </span>

        </div>

        <p className="hero-tagline wm-tagline">
          Boutique Talent Management&nbsp;&middot;&nbsp;Consulting&nbsp;&middot;&nbsp;India
        </p>
        <div className="hero-ctas wm-ctas">
          <a href="#about" className="btn btn-primary">Explore</a>
          <a href="#contact" className="btn btn-secondary">Book an Artist</a>
        </div>
      </div>

      <div className="scroll-hint wm-scroll">
        <span>Scroll to Explore</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>

      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path className="wave-path wave-1" d="M0,80 C240,160 480,0 720,80 C960,160 1200,0 1440,80 L1440,200 L0,200 Z" />
          <path className="wave-path wave-2" d="M0,120 C360,50 720,170 1080,90 C1260,50 1380,110 1440,120 L1440,200 L0,200 Z" />
          <path className="wave-path wave-3" d="M0,150 C300,100 600,180 900,140 C1100,110 1300,160 1440,150 L1440,200 L0,200 Z" />
        </svg>
      </div>

      <div className="hero-stats-strip">
        <div className="container stats-row">
          <div className="stat"><strong>10+</strong><span>Years of experience</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>500+</strong><span>Events delivered across India</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>50+</strong><span>Leading brand clients</span></div>
          <div className="stat-divider" />
          <div className="stat"><strong>100%</strong><span>End-to-end managed</span></div>
        </div>
      </div>
    </section>
  )
}
