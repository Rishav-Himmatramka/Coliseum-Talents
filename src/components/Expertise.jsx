import { useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './Expertise.css'

const CARDS = [
  {
    num: '01',
    title: 'Artist Management',
    desc: 'Strategic career management for speakers, celebrities, athletes, and performers — from brand building to event representation.',
    tags: ['Speaker Representation', 'Celebrity Management', 'Athlete Partnerships'],
  },
  {
    num: '02',
    title: 'Celebrity & Speaker Booking',
    desc: 'End-to-end celebrity procurement for brand campaigns, product launches, conferences, and private events across India.',
    tags: ['Brand Campaigns', 'Product Launches', 'Conferences', 'Private Events'],
  },
  {
    num: '03',
    title: 'Corporate Entertainment',
    desc: 'Live bands, comedians, illusionists, anchors, DJs, cultural acts and bespoke entertainment for corporate gatherings.',
    tags: ['Live Bands', 'Stand-up Comedy', 'Illusionists', 'Anchors & DJs'],
  },
  {
    num: '04',
    title: 'Event Consulting',
    desc: 'Talent recommendations, budgeting, negotiations, production coordination and full artist logistics management.',
    tags: ['Talent Curation', 'Budget Planning', 'Production Coordination', 'Logistics'],
  },
  {
    num: '05',
    title: 'Motivational Speakers',
    desc: 'Leadership, business, entrepreneurship, defence, sports, education and sustainability speakers for every brief.',
    tags: ['Leadership', 'Defence Veterans', 'Sports Icons', 'Entrepreneurship'],
  },
  {
    num: '06',
    title: 'Brand Collaborations',
    desc: 'Connecting brands with personalities for endorsements, campaigns, digital content and experiential marketing.',
    tags: ['Endorsements', 'Digital Content', 'Experiential Marketing', 'Campaigns'],
  },
]

export default function Expertise() {
  const ref = useRef()
  useFadeIn(ref)

  return (
      <section className="section expertise-section" id="services" ref={ref}>
      <div className="container">
        <div className="section-heading fade-up">
          <div className="gold-line" />
          <p className="eyebrow">Our expertise</p>
          <h2>Six ways we deliver exceptional talent experiences.</h2>
          <p>From artist management and celebrity bookings to corporate entertainment and event consulting — tailored to India's leading brands.</p>
        </div>

        <div className="expertise-grid">
          {CARDS.map((card, i) => (
            <article key={card.num} className={`expertise-card fade-up delay-${i + 1}`}>
              <span className="card-num">{card.num}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <ul>
                {card.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
