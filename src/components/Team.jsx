import { useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './Team.css'

const TEAM = [
  { name: 'Anuj Agrawal', title: 'Founder', bio: 'With over 10 years of experience in artist and celebrity management, Anuj has worked with leading speakers, sports icons, entertainers, and corporate clients to create memorable experiences through strategic talent partnerships.', initials: 'AA' },
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
          <h2>The person behind every extraordinary experience.</h2>
          <p>A decade of experience in India's live events and talent management industry.</p>
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
