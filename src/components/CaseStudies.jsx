import { useState, useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './CaseStudies.css'

// Replace src with real photo paths once available e.g. '/events/event1.jpg'
const EVENTS = [
  {
    id: 1,
    photo: null,
    label: 'Leadership Summit',
    client: 'Standard Chartered',
    talent: 'Keynote Speaker',
    size: 'large', // spans 2 columns
  },
  {
    id: 2,
    photo: null,
    label: 'Annual Conference',
    client: 'ICICI Lombard',
    talent: 'Celebrity Host',
    size: 'small',
  },
  {
    id: 3,
    photo: null,
    label: 'Employee Engagement',
    client: 'Bajaj Finance',
    talent: 'Motivational Speaker',
    size: 'small',
  },
  {
    id: 4,
    photo: null,
    label: 'Awards Night',
    client: 'Tata AIA',
    talent: 'Live Performer',
    size: 'small',
  },
  {
    id: 5,
    photo: null,
    label: 'Brand Activation',
    client: 'Digit Insurance',
    talent: 'Corporate Entertainer',
    size: 'large',
  },
  {
    id: 6,
    photo: null,
    label: 'Strategy Forum',
    client: 'Bajaj Allianz',
    talent: 'Defence Speaker',
    size: 'small',
  },
]

export default function CaseStudies() {
  const ref = useRef()
  const [hovered, setHovered] = useState(null)
  useFadeIn(ref)

  return (
    <section className="section cases-section" id="events" ref={ref}>
      <div className="container">
        <div className="section-heading fade-up">
          <div className="gold-line" />
          <p className="eyebrow">Past events</p>
          <h2>Moments we have helped make extraordinary.</h2>
          <p>A glimpse into the events, stages and celebrations we have been part of across India.</p>
        </div>

        <div className="gallery-grid fade-up delay-1">
          {EVENTS.map((ev) => (
            <div
              key={ev.id}
              className={`gallery-item${ev.size === 'large' ? ' gallery-item--large' : ''}${hovered === ev.id ? ' hovered' : ''}`}
              onMouseEnter={() => setHovered(ev.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Photo or placeholder */}
              {ev.photo ? (
                <img src={ev.photo} alt={ev.label} className="gallery-photo" />
              ) : (
                <div className="gallery-placeholder">
                  <span className="gallery-placeholder-icon">✦</span>
                  <span className="gallery-placeholder-text">Photo coming soon</span>
                </div>
              )}

              {/* Overlay on hover */}
              <div className="gallery-overlay">
                <div className="gallery-overlay-content">
                  <span className="gallery-talent-tag">{ev.talent}</span>
                  <h3>{ev.label}</h3>
                  <p>{ev.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="gallery-note fade-up delay-3">
          Photos from our events will be added here. Reach out to <a href="mailto:info@coliseumtalents.in">info@coliseumtalents.in</a> to learn more about past events.
        </p>
      </div>
    </section>
  )
}
