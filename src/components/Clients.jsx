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
      </div>
    </section>
  )
}
