import { useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './About.css'

export default function About() {
  const ref = useRef()
  useFadeIn(ref)

  return (
    <section className="section about-section" id="about" ref={ref}>
      <div className="container about-inner">
        <div className="about-left fade-up">
          <div className="gold-line" />
          <p className="eyebrow">About Coliseum Talents</p>
          <h2>We shape moments that feel elevated, intentional and unforgettable.</h2>
        </div>
        <div className="about-right">
          <p className="fade-up delay-1">
            Coliseum Talents exists for brands and hosts who want more than a booking. We bring a
            highly selective approach to talent curation, ensuring every choice speaks to the
            energy, story and ambition of the occasion.
          </p>
          <p className="fade-up delay-2">
            From intimate private celebrations to global corporate summits, we operate at the
            intersection of culture, entertainment and strategy — crafting experiences that leave
            a lasting impression on every guest in the room.
          </p>
          <div className="about-pillars fade-up delay-3">
            <div className="pillar">
              <strong>Selective</strong>
              <span>We work with talent we believe in — no compromises on quality.</span>
            </div>
            <div className="pillar">
              <strong>Strategic</strong>
              <span>Every talent decision serves the story you're trying to tell.</span>
            </div>
            <div className="pillar">
              <strong>Seamless</strong>
              <span>You focus on the room. We handle everything else.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
