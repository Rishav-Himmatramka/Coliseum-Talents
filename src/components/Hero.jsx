import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const OLISEUM = ['O','L','I','S','E','U','M']
const TALENTS = ['T','A','L','E','N','T','S']

export default function Hero() {
  const [play, setPlay] = useState(false)
  const arc1Ref = useRef()
  const arc2Ref = useRef()
  const heroRef = useRef()
  const rafRef = useRef()
  const posRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 })

  // Trigger animation after mount so it always plays fresh
  useEffect(() => {
    const t = requestAnimationFrame(() => setPlay(true))
    return () => cancelAnimationFrame(t)
  }, [])

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
      const dx = p.x * 14
      const dy = p.y * 14
      if (arc1Ref.current)
        arc1Ref.current.style.transform = `translate(${dx}px, ${dy}px)`
      if (arc2Ref.current)
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

  /*
   * Arc geometry (viewBox 220x220, center 110,110):
   *
   * Outer C  r=94  gap ±48°  stroke=6   (static anchor)
   *   cos48=0.669 sin48=0.743
   *   start(172.9,40.2) end(172.9,179.8)
   *
   * Middle C r=74  gap ±42°  stroke=10  (floats with cursor)
   *   cos42=0.743 sin42=0.669
   *   start(165.0,60.5) end(165.0,159.5)
   *
   * Inner C  r=56  gap ±38°  stroke=15  (floats with cursor, same as middle)
   *   cos38=0.788 sin38=0.616
   *   start(154.1,75.5) end(154.1,144.5)
   */

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-bg" />

      <div className="hero-center">
        <div className="hero-wordmark">

          <div className="wm-row-top">
            {/* C arc — drops in LAST */}
            <div className={`wm-c-wrap${play ? ' play' : ''}`}>
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

                {/* Outer C r=94 — STATIC ANCHOR */}
                <path
                  d="M 172.9,40.2 A 94,94 0 1,0 172.9,179.8"
                  stroke="url(#cg)" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.60"
                />

                {/* Middle C r=74 — floats toward cursor */}
                <g ref={arc1Ref}>
                  <path
                    d="M 165.0,60.5 A 74,74 0 1,0 165.0,159.5"
                    stroke="url(#cg)" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.82"
                  />
                </g>

                {/* Inner C r=56 — floats with cursor (same as middle) */}
                <g ref={arc2Ref}>
                  <path
                    d="M 154.1,75.5 A 56,56 0 1,0 154.1,144.5"
                    stroke="url(#cg)" strokeWidth="15" strokeLinecap="round" fill="none"
                  />
                </g>
              </svg>
            </div>

            {/* O L I S E U M — each letter drops in with stagger */}
            <span className="wm-letters" aria-label="OLISEUM">
              {OLISEUM.map((letter, i) => (
                <span
                  key={i}
                  className={`wm-letter${play ? ' play' : ''}`}
                  style={{ '--letter-i': i }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </div>

          {/* Divider line */}
          <div className={`wm-divider${play ? ' play' : ''}`} />

          {/* T A L E N T S */}
          <span className="wm-talents-wrap" aria-label="TALENTS">
            {TALENTS.map((letter, i) => (
              <span
                key={i}
                className={`wm-talent-letter${play ? ' play' : ''}`}
                style={{ '--talent-i': i }}
              >
                {letter}
              </span>
            ))}
          </span>

        </div>

        <p className={`hero-tagline wm-tagline${play ? ' play' : ''}`}>
          Boutique Talent Management&nbsp;&middot;&nbsp;Consulting&nbsp;&middot;&nbsp;India
        </p>
        <div className={`hero-ctas wm-ctas${play ? ' play' : ''}`}>
          <a href="#about" className="btn btn-primary">Explore</a>
          <a href="#contact" className="btn btn-secondary">Book an Artist</a>
        </div>
      </div>

      <div className={`scroll-hint wm-scroll${play ? ' play' : ''}`}>
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
