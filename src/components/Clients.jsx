import { useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './Clients.css'

const CLIENTS = [
  'Standard Chartered',
  'Tata AIA',
  'ICICI Lombard',
  'ICICI Prudential',
  'Bajaj Finance',
  'Bajaj Allianz',
  'Digit Insurance',
]

const INDUSTRIES = [
  { icon: '🏦', label: 'Banking & Financial Services' },
  { icon: '🛡️', label: 'Insurance' },
  { icon: '💻', label: 'IT & Technology' },
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '🏥', label: 'Healthcare' },
  { icon: '🎓', label: 'Education' },
  { icon: '🚀', label: 'Startups' },
  { icon: '🏛️', label: 'Government & Associations' },
  { icon: '💎', label: 'Luxury Brands' },
]

export default function Clients() {
  const ref = useRef()
  useFadeIn(ref)

  return (
    <section className="section clients-section" id="clients" ref={ref}>
      <div className="container">
        <div className="section-heading fade-up">
          <div className="gold-line" />
          <p className="eyebrow">Our clients</p>
          <h2>Trusted by India's most respected organisations.</h2>
          <p>We've delivered talent solutions for leading brands across banking, insurance, technology, and beyond.</p>
        </div>

        <div className="clients-grid fade-up delay-1">
          {CLIENTS.map(name => (
            <div key={name} className="client-badge">
              <span>{name}</span>
            </div>
          ))}
        </div>

        <div className="industries-wrap fade-up delay-2">
          <p className="eyebrow">Industries we serve</p>
          <div className="industries-grid">
            {INDUSTRIES.map(ind => (
              <div key={ind.label} className="industry-item">
                <span className="ind-icon">{ind.icon}</span>
                <span>{ind.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
