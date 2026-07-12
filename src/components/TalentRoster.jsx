import { useState, useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './TalentRoster.css'

const CATEGORIES = ['All', 'Speakers', 'Celebrities', 'Performers', 'Artists']

const TALENT = [
  { id: 1, name: 'Alexandra Reid', title: 'Keynote Speaker', category: 'Speakers', initials: 'AR', color: '#8B6914' },
  { id: 2, name: 'Marcus Chen', title: 'Innovation Strategist', category: 'Speakers', initials: 'MC', color: '#7A5C10' },
  { id: 3, name: 'Sophia Laurent', title: 'Award-Winning Host', category: 'Celebrities', initials: 'SL', color: '#9B7520' },
  { id: 4, name: 'James Okafor', title: 'TV Presenter & Author', category: 'Celebrities', initials: 'JO', color: '#6B4F0E' },
  { id: 5, name: 'The Velvet Collective', title: 'Jazz & Soul Ensemble', category: 'Performers', initials: 'VC', color: '#8A6818' },
  { id: 6, name: 'DJ Meridian', title: 'Live Electronic Artist', category: 'Performers', initials: 'DM', color: '#7C5E14' },
  { id: 7, name: 'Amara Visual Art', title: 'Live Painting Experience', category: 'Artists', initials: 'AV', color: '#956D1A' },
  { id: 8, name: 'Nova Dance Company', title: 'Contemporary Dance', category: 'Artists', initials: 'ND', color: '#704D0C' },
]

export default function TalentRoster() {
  const [active, setActive] = useState('All')
  const ref = useRef()
  useFadeIn(ref)

  const filtered = active === 'All' ? TALENT : TALENT.filter(t => t.category === active)

  return (
    <section className="section roster-section" id="roster" ref={ref}>
      <div className="container">
        <div className="section-heading fade-up">
          <div className="gold-line" />
          <p className="eyebrow">Our talent roster</p>
          <h2>Exceptional talent, handpicked for every occasion.</h2>
          <p>Each talent partner is individually vetted and personally selected to ensure the highest standard of performance and professionalism.</p>
        </div>

        <div className="filter-tabs fade-up delay-1">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-tab${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="roster-grid">
          {filtered.map((talent, i) => (
            <article key={talent.id} className={`talent-card fade-up delay-${(i % 4) + 1}`}>
              <div className="talent-avatar" style={{ background: `radial-gradient(circle at 40% 35%, ${talent.color}88, ${talent.color}33)` }}>
                <span>{talent.initials}</span>
              </div>
              <div className="talent-info">
                <span className="talent-category">{talent.category}</span>
                <h3>{talent.name}</h3>
                <p>{talent.title}</p>
              </div>
              <a href="#contact" className="talent-cta btn btn-secondary">Book Talent</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
