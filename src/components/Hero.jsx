import { useState, useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const orbRef = useRef()
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
      if (orbRef.current) {
        const dx = p.x * 72
        const dy = p.y * 48
        orbRef.current.style.transform = `translate(${dx}px, ${dy}px)`
      }
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

      <div className={`hero-center${visible ? ' visible' : ''}`}>

        {/* Styled wordmark */}
        <div className="hero-wordmark">

          {/* Top row: COLISEUM with floating orb */}
          <div className="wm-row-top">
            <span className="wm-text wm-coliseum">COLISEUM</span>
            <div className="wm-orb" ref={orbRef}>
              <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="80" cy="80" r="72" stroke="url(#g1)" strokeWidth="3.5"/>
                <circle cx="80" cy="80" r="54" stroke="url(#g2)" strokeWidth="1.5" strokeDasharray="8 5" opacity="0.7"/>
                <circle cx="80" cy="80" r="32" fill="url(#gr)" />
                <circle cx="80" cy="80" r="18" fill="url(#g3)" opacity="0.5"/>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f0d470"/>
                    <stop offset="100%" stopColor="#a07820"/>
                  </linearGradient>
                  <linearGradient id="g2" x1="160" y1="0" x2="0" y2="160" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f0d470" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#d4a832" stopOpacity="0.3"/>
                  </linearGradient>
                  <radialGradient id="gr" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f0d470" stopOpacity="0.25"/>
                    <stop offset="100%" stopColor="#c49a2c" stopOpacity="0"/>
                  </radialGradient>
                  <radialGradient id="g3" cx="40%" cy="35%" r="50%">
                    <stop offset="0%" stopColor="#fff8e0" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="#d4a832" stopOpacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Divider line */}
          <div className="wm-divider" />

          {/* Bottom row: TALENTS */}
          <div className="wm-row-bottom">
            <span className="wm-text wm-talents">TALENTS</span>
          </div>
        </div>

        <p className="hero-tagline">Boutique Talent Management &amp; Consulting · India</p>
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
          <div className="stat">
            <strong>10+</strong>
            <span>Years of experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>500+</strong>
            <span>Events delivered across India</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>50+</strong>
            <span>Leading brand clients</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>100%</strong>
            <span>End-to-end managed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
