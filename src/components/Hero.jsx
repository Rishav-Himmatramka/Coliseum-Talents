import { useState, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero-bg" />

      <div className={`hero-center${visible ? ' visible' : ''}`}>
        <div className="hero-logo-wrap">
          <img src="/logo.png" alt="Coliseum Talents" className="hero-logo" />
        </div>
        <h1 className="hero-brand">Coliseum Talents</h1>
        <p className="hero-tagline">Boutique Talent Management &amp; Consulting · India</p>
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
