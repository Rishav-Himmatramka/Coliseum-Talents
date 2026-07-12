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
          <h2>Every event deserves the right voice, the right performance, and the right experience.</h2>
        </div>
        <div className="about-right">
          <p className="fade-up delay-1">
            Founded by <strong>Anuj Agrawal</strong>, Coliseum Talents specialises in artist management,
            celebrity bookings, motivational speakers, sports icons, entertainers, and event consulting.
            With over a decade of experience in the entertainment and live events industry, the company
            has successfully delivered talent solutions for leading brands across India.
          </p>
          <p className="fade-up delay-2">
            Whether it's a keynote speaker who inspires, a celebrity who elevates a campaign, or
            entertainment that captivates audiences — Coliseum Talents manages every engagement
            professionally, from talent selection and negotiations to logistics and execution.
          </p>
          <div className="about-pillars fade-up delay-3">
            <div className="pillar">
              <strong>Curated</strong>
              <span>Handpicked talent matched to your audience, brief and budget.</span>
            </div>
            <div className="pillar">
              <strong>Professional</strong>
              <span>Transparent commercials, professional contracts, no surprises.</span>
            </div>
            <div className="pillar">
              <strong>End-to-End</strong>
              <span>Selection, negotiation, logistics and execution — all handled.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
