import { useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './CaseStudies.css'

const CASES = [
  {
    tag: 'Banking & Financial Services',
    title: 'Delivered keynote speakers and celebrity hosts for leadership summits across Standard Chartered, ICICI Lombard, and ICICI Prudential.',
    industry: 'Banking & Insurance',
    type: 'Keynote Speakers + Celebrity Hosts',
    outcome: 'Pan-India execution across multiple cities',
    num: '01',
  },
  {
    tag: 'Insurance & Investment',
    title: 'Curated motivational speakers and entertainers for annual conferences and employee engagement events for Bajaj Finance, Bajaj Allianz, and Tata AIA.',
    industry: 'Insurance & Finance',
    type: 'Motivational Speakers + Corporate Entertainment',
    outcome: 'Consistently re-engaged year on year',
    num: '02',
  },
  {
    tag: 'Emerging Insurance',
    title: 'Talent curation and end-to-end event consulting for Digit Insurance\'s large-format corporate events and brand activations.',
    industry: 'InsurTech',
    type: 'Event Consulting + Talent Procurement',
    outcome: 'Seamless delivery from brief to curtain call',
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
          <h2>Trusted by India's leading brands.</h2>
          <p>A selection of the companies we've delivered talent solutions for across banking, insurance, and financial services.</p>
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
