import { useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './CaseStudies.css'

const CASES = [
  {
    tag: 'Global Tech Summit',
    title: 'A 2,000-person leadership summit transformed by world-class keynote talent.',
    industry: 'Technology',
    type: 'Keynote Speaker',
    outcome: '98% attendee satisfaction',
    num: '01',
  },
  {
    tag: 'Luxury Gala Evening',
    title: 'An award night elevated with celebrity hosting and bespoke live performance.',
    industry: 'Luxury & Finance',
    type: 'Celebrity Host + Live Act',
    outcome: '4× standing ovation moments',
    num: '02',
  },
  {
    tag: 'Private Brand Launch',
    title: 'An intimate product launch made iconic by a curated artist-in-residence experience.',
    industry: 'Fashion & Lifestyle',
    type: 'Curated Artist',
    outcome: 'Covered in 12 media outlets',
    num: '03',
  },
]

export default function CaseStudies() {
  const ref = useRef()
  useFadeIn(ref)

  return (
    <section className="section cases-section" id="events" ref={ref}>
      <div className="container">
        <div className="section-heading fade-up">
          <div className="gold-line" />
          <p className="eyebrow">Past events</p>
          <h2>Moments we've helped make extraordinary.</h2>
          <p>A selection of events where our talent curation made a measurable difference.</p>
        </div>

        <div className="cases-list">
          {CASES.map((c, i) => (
            <article key={c.num} className={`case-card fade-up delay-${i + 1}`}>
              <div className="case-num">{c.num}</div>
              <div className="case-body">
                <span className="case-tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <div className="case-meta">
                  <span><strong>Industry:</strong> {c.industry}</span>
                  <span><strong>Talent:</strong> {c.type}</span>
                  <span className="case-outcome">✦ {c.outcome}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
