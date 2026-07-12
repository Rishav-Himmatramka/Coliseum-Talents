import { useState, useEffect } from 'react'
import './Hero.css'

const KEYWORDS = ['Speakers', 'Celebrities', 'Performers', 'Artists', 'Entertainers']

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setIndex(i => (i + 1) % KEYWORDS.length)
        setAnimating(false)
      }, 350)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero-bg" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Boutique talent management &amp; consulting · India</p>
          <h1>
            Connecting Brands with India's Most Inspiring{' '}
            <span className={`keyword${animating ? ' exit' : ' enter'}`}>
              {KEYWORDS[index]}
            </span>.
          </h1>
          <p className="hero-lead">
            Coliseum Talents is a boutique talent management and consulting company that curates
            exceptional speakers, celebrities, performers, artists, and entertainers for corporate
            events, conferences, leadership summits, awards nights, and private celebrations.
          </p>
          <div className="hero-actions">
            <a href="#roster" className="btn btn-primary">Explore Talent</a>
            <a href="#contact" className="btn btn-secondary">Book an Artist</a>
          </div>
        </div>

        <div className="hero-card">
          <p className="eyebrow">Why clients choose us</p>
          <h3>Trusted by India's leading brands.</h3>
          <ul>
            <li>
              <span className="check">✦</span>
              Exclusive management of Lt. Gen. Satish Dua &amp; Viren Rasquinha
            </li>
            <li>
              <span className="check">✦</span>
              Pan-India execution for corporate &amp; private events
            </li>
            <li>
              <span className="check">✦</span>
              End-to-end management from selection to stage
            </li>
          </ul>
        </div>
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
