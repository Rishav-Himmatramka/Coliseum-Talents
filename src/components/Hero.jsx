import { useState, useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const arc1Ref = useRef()
  const arc2Ref = useRef()
  const arc3Ref = useRef()
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

      // Each arc layer rotates a different amount = parallax depth
      const rx = p.x, ry = p.y
      if (arc1Ref.current) arc1Ref.current.style.transform = `rotate(${rx * 8}deg) translateY(${ry * 5}px)`
      if (arc2Ref.current) arc2Ref.current.style.transform = `rotate(${rx * 14}deg) translateY(${ry * 9}px)`
      if (arc3Ref.current) arc3Ref.current.style.transform = `rotate(${rx * 20}deg) translateY(${ry * 13}px)`

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
        <div className="hero-wordmark">

          {/* Row 1: Interactive C + OLISEUM */}
          <div className="wm-row-top">

            {/* Interactive C with concentric arc strips */}
            <div className="wm-c-wrap">
              <svg
                className="wm-c-svg"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="cg1" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#f0d470"/>
                    <stop offset="100%" stopColor="#c49a2c"/>
                  </linearGradient>
                  <linearGradient id="cg2" x1="200" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#e8c96a" stopOpacity="0.85"/>
                    <stop offset="100%" stopColor="#a07820" stopOpacity="0.4"/>
                  </linearGradient>
                  <linearGradient id="cg3" x1="0" y1="200" x2="200" y2="0" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#d4a832" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#f0d470" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>

                {/* Core C — thick, static (the main letter shape) */}
                {/* Arc from ~40deg to ~320deg (opening right) */}
                <path
                  d="M 155,55 A 65,65 0 1,0 155,145"
                  stroke="url(#cg1)"
                  strokeWidth="14"
                  strokeLinecap="round"
                />

                {/* Arc strip 1 — slightly larger, reacts to cursor */}
                <g ref={arc1Ref} style={{transformOrigin: '100px 100px'}}>
                  <path
                    d="M 167,42 A 80,80 0 1,0 167,158"
                    stroke="url(#cg2)"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </g>

                {/* Arc strip 2 — larger, reacts more */}
                <g ref={arc2Ref} style={{transformOrigin: '100px 100px'}}>
                  <path
                    d="M 177,30 A 94,94 0 1,0 177,170"
                    stroke="url(#cg3)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                </g>

                {/* Arc strip 3 — outermost, reacts most */}
                <g ref={arc3Ref} style={{transformOrigin: '100px 100px'}}>
                  <path
                    d="M 186,18 A 106,106 0 1,0 186,182"
                    stroke="url(#cg2)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                </g>
              </svg>
            </div>

            <span className="wm-text wm-oliseum">OLISEUM</span>
          </div>

          {/* Divider */}
          <div className="wm-divider" />

          {/* Row 2: TALENTS */}
          <div className="wm-row-bottom">
            <span className="wm-text wm-talents">TALENTS</span>
          </div>
        </div>

        <p className="hero-tagline">Boutique Talent Management · Consulting · India</p>
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
