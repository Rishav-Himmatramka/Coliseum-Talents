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
          <p className="eyebrow">Boutique talent management &amp; consulting</p>
          <h1>
            Premium{' '}
            <span className={`keyword${animating ? ' exit' : ' enter'}`}>
              {KEYWORDS[index]}
            </span>
            <br />for extraordinary events.
          </h1>
          <p className="hero-lead">
            We curate unforgettable speakers, celebrities, performers, artists and entertainers
            for corporate events, leadership summits, award nights and private celebrations.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Book a Consultation</a>
            <a href="#roster" className="btn btn-secondary">Discover Talent</a>
          </div>
        </div>

        <div className="hero-card">
          <p className="eyebrow">Why clients choose us</p>
          <h3>Tailored talent, elevated impact.</h3>
          <ul>
            <li>
              <span className="check">✦</span>
              Handpicked performers aligned to your audience
            </li>
            <li>
              <span className="check">✦</span>
              Strategic event consultation from brief to delivery
            </li>
            <li>
              <span className="check">✦</span>
              Seamless logistics and premium guest experiences
            </li>
          </ul>
        </div>
      </div>

      <div className="hero-stats-strip">
        <div className="container stats-row">
          <div className="stat">
            <strong>120+</strong>
            <span>Curated talent partnerships</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>25+</strong>
            <span>Industries served</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>500+</strong>
            <span>Events delivered worldwide</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <strong>100%</strong>
            <span>Bespoke event curation</span>
          </div>
        </div>
      </div>
    </section>
  )
}
