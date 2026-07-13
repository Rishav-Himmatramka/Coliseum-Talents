import { useState, useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const arc1Ref = useRef()
  const arc2Ref = useRef()
  const heroRef = useRef()
  const rafRef = useRef()
  const posRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 })

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

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
      p.x += (p.tx - p.x) * 0.055
      p.y += (p.ty - p.y) * 0.055
      if (arc1Ref.current)
        arc1Ref.current.style.transform = `rotate(${p.x * 12}deg) translateY(${p.y * 7}px)`
      if (arc2Ref.current)
        arc2Ref.current.style.transform = `rotate(${p.x * 22}deg) translateY(${p.y * 13}px)`
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
   * Tight arc geometry matching logo (viewBox 220x220, center 110,110):
   *
   * Core C   r=62  gap ±40°  arc=280°  stroke=14
   *   start(157.5,70.1) end(157.5,149.9)
   *
   * Strip 1  r=74  gap ±42°  arc=276°  stroke=10   (8px clearance from C edge)
   *   cos42=0.743 sin42=0.669
   *   start(165.0,60.5) end(165.0,159.5)
   *
   * Strip 2  r=86  gap ±45°  arc=270°  stroke=7    (8px clearance from strip1 edge)
   *   cos45=0.707 sin45=0.707
   *   start(170.8,49.2) end(170.8,170.8)
   */

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero-bg" />

      <div className={`hero-center${visible ? ' visible' : ''}`}>
        <div className="hero-wordmark">

          <div className="wm-c-wrap">
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

              {/* Core C */}
              <path
                d="M 157.5,70.1 A 62,62 0 1,0 157.5,149.9"
                stroke="url(#cg)" strokeWidth="14" strokeLinecap="round" fill="none"
              />

              {/* Strip 1 — r=74, 8px gap from C, reacts to cursor */}
              <g ref={arc1Ref} style={{ transformOrigin: '110px 110px' }}>
                <path
                  d="M 165.0,60.5 A 74,74 0 1,0 165.0,159.5"
                  stroke="url(#cg)" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.82"
                />
              </g>

              {/* Strip 2 — r=86, 8px gap from strip1, reacts more */}
              <g ref={arc2Ref} style={{ transformOrigin: '110px 110px' }}>
                <path
                  d="M 170.8,49.2 A 86,86 0 1,0 170.8,170.8"
                  stroke="url(#cg)" strokeWidth="7" strokeLinecap="round" fill="none" opacity="0.65"
                />
              </g>
            </svg>
          </div>

          <span className="wm-text wm-oliseum">OLISEUM</span>
          <div className="wm-divider" />
          <span className="wm-text wm-talents">TALENTS</span>

        </div>

        <p className="hero-tagline">Boutique Talent Management&nbsp;&middot;&nbsp;Consulting&nbsp;&middot;&nbsp;India</p>
        <div className="hero-ctas">
          <a href="#about" className="btn btn-primary">Explore</a>
          <a href="#contact" className="btn btn-secondary">Book an Artist</a>
        </div>
      </div>

      <div className={`scroll-hint${visible ? ' visible' : ''}`}>
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
