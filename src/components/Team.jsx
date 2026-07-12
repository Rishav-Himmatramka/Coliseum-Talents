import { useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './Team.css'

const TEAM = [
  { name: 'Olivia Sterling', title: 'Founder & CEO', bio: 'Former entertainment executive with 15+ years curating landmark events globally.', initials: 'OS' },
  { name: 'Emmanuel Kofi', title: 'Head of Talent', bio: 'Talent strategist who has partnered with Grammy winners, TED speakers and global icons.', initials: 'EK' },
  { name: 'Ines Navarro', title: 'Director of Events', bio: 'Award-winning event producer behind some of Europe\'s most prestigious galas.', initials: 'IN' },
  { name: 'Rajan Patel', title: 'Client Partnerships', bio: 'Relationship-focused strategist ensuring every client brief is exceeded, not just met.', initials: 'RP' },
]

export default function Team() {
  const ref = useRef()
  useFadeIn(ref)

  return (
    <section className="section team-section" id="team" ref={ref}>
      <div className="container">
        <div className="section-heading fade-up">
          <div className="gold-line" />
          <p className="eyebrow">Our team</p>
          <h2>The people behind every extraordinary experience.</h2>
          <p>A boutique team with deep industry roots, driven by a shared obsession with excellence.</p>
        </div>

        <div className="team-grid">
          {TEAM.map((member, i) => (
            <article key={member.name} className={`team-card fade-up delay-${i + 1}`}>
              <div className="team-avatar">
                <span>{member.initials}</span>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="team-title">{member.title}</span>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
