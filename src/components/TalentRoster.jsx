import { useState, useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './TalentRoster.css'

const CATEGORIES = ['All', 'Speakers', 'Sports Icons', 'Celebrities', 'Entertainment', 'Defence']

const TALENT = [
  { id: 1, name: 'Motivational Speakers', title: 'Leadership, entrepreneurship & inspiration', category: 'Speakers', initials: 'MS', color: '#8B6914' },
  { id: 2, name: 'Business Leaders', title: 'Corporate keynotes & strategy forums', category: 'Speakers', initials: 'BL', color: '#7A5C10' },
  { id: 3, name: 'Corporate Trainers', title: 'Workshops, L&D and skill-building sessions', category: 'Speakers', initials: 'CT', color: '#6B4F0E' },
  { id: 4, name: 'Olympians & Sports Icons', title: 'Athletes and sports personalities', category: 'Sports Icons', initials: 'SI', color: '#9B7520' },
  { id: 5, name: 'Bollywood Celebrities', title: 'Film stars for events & brand campaigns', category: 'Celebrities', initials: 'BC', color: '#8A6818' },
  { id: 6, name: 'Hosts & Anchors', title: 'Professional event anchoring & hosting', category: 'Entertainment', initials: 'HA', color: '#7C5E14' },
  { id: 7, name: 'Stand-up Comedians', title: 'Corporate comedy nights & award shows', category: 'Entertainment', initials: 'SC', color: '#956D1A' },
  { id: 8, name: 'Live Bands & DJs', title: 'Music performances and dance floors', category: 'Entertainment', initials: 'LB', color: '#704D0C' },
  { id: 9, name: 'Illusionists & Magicians', title: 'Mind-bending stage performances', category: 'Entertainment', initials: 'IM', color: '#825F12' },
  { id: 10, name: 'Classical & Contemporary', title: 'Cultural performances for galas & launches', category: 'Entertainment', initials: 'CP', color: '#6E5010' },
  { id: 11, name: 'Defence Veterans', title: 'Generals, Commandos & military leaders', category: 'Defence', initials: 'DV', color: '#7B6218' },
  { id: 12, name: 'Influencers & Creators', title: 'Digital personalities for brand activations', category: 'Celebrities', initials: 'IC', color: '#8C7020' },
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
          <h2>India's most inspiring talent, across every category.</h2>
          <p>From defence veterans and Olympians to Bollywood celebrities and live entertainers — curated for corporate events, conferences, and celebrations across India.</p>
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
          {filtered.map((talent) => (
            <article key={talent.id} className="talent-card">
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
