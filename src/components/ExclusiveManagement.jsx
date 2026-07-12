import { useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './ExclusiveManagement.css'

const EXCLUSIVES = [
  {
    initials: 'SD',
    name: 'Lt. Gen. Satish Dua (Retd.)',
    title: 'Former Chief of Integrated Defence Staff to the Chairman Chiefs of Staff Committee',
    bio: 'One of India\'s most respected military leaders, Lt. Gen. Satish Dua is celebrated for his extraordinary leadership, strategic decision-making under pressure, and his role in the 2016 Uri Surgical Strike. A powerful voice on resilience, national security, and leadership under adversity.',
    tags: ['Leadership', 'Resilience', 'National Security', 'Strategic Decision-Making'],
  },
  {
    initials: 'VR',
    name: 'Viren Rasquinha',
    title: 'Olympian · Former Indian Hockey Captain · MD & CEO, Olympic Gold Quest',
    bio: 'An Olympian, former captain of the Indian hockey team, and now the Managing Director & CEO of Olympic Gold Quest — India\'s premier high-performance sports programme. Viren speaks with authority on leadership, teamwork, peak performance, and the mindset of champions.',
    tags: ['Sports Leadership', 'Peak Performance', 'Teamwork', 'Champion Mindset'],
  },
]

export default function ExclusiveManagement() {
  const ref = useRef()
  useFadeIn(ref)

  return (
    <section className="section exclusive-section" id="exclusive" ref={ref}>
      <div className="container">
        <div className="section-heading fade-up" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
          <div className="gold-line" style={{ margin: '0 auto 1.5rem' }} />
          <p className="eyebrow">Exclusive management</p>
          <h2>Icons we are proud to exclusively represent.</h2>
          <p>Coliseum Talents is the exclusive management partner for two of India's most inspiring personalities.</p>
        </div>

        <div className="exclusive-grid">
          {EXCLUSIVES.map((person, i) => (
            <article key={person.name} className={`exclusive-card fade-up delay-${i + 1}`}>
              <div className="exclusive-avatar">
                <span>{person.initials}</span>
              </div>
              <div className="exclusive-body">
                <h3>{person.name}</h3>
                <p className="exclusive-title">{person.title}</p>
                <p className="exclusive-bio">{person.bio}</p>
                <div className="exclusive-tags">
                  {person.tags.map(tag => (
                    <span key={tag} className="exclusive-tag">{tag}</span>
                  ))}
                </div>
                <a href="#contact" className="btn btn-primary exclusive-cta">Book for Your Event</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
