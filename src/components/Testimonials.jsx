import { useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './Testimonials.css'

const QUOTES = [
  { quote: 'Coliseum Talents delivered a speaker that completely transformed the energy of our summit. The audience left inspired.', name: 'Sarah K.', role: 'Head of Events, Fortune 500 Tech Co.' },
  { quote: 'The celebrity host they recommended was a perfect cultural fit. It was more than a booking — it was a creative partnership.', name: 'James A.', role: 'Creative Director, Global Brand Agency' },
  { quote: "Every detail was handled with extraordinary care. Our gala was the most talked-about event we've ever hosted.", name: 'Priya M.', role: 'VP of Marketing, Luxury Finance Group' },
  { quote: 'The live performance was unlike anything our guests had experienced. Coliseum truly understands elevated entertainment.', name: 'David L.', role: 'CEO, Private Members Club' },
  { quote: 'From brief to curtain call, they were exceptional. The talent they curated was the heart of the evening.', name: 'Nina R.', role: 'Events Lead, International Awards Body' },
]

export default function Testimonials() {
  const ref = useRef()
  useFadeIn(ref)

  // Duplicate for seamless loop
  const doubled = [...QUOTES, ...QUOTES]

  return (
    <section className="section testimonials-section" ref={ref}>
      <div className="container">
        <div className="section-heading fade-up">
          <div className="gold-line" />
          <p className="eyebrow">Client testimonials</p>
          <h2>Trusted by the world's most discerning hosts.</h2>
        </div>
      </div>

      <div className="marquee-outer fade-up delay-2">
        <div className="marquee-track">
          {doubled.map((t, i) => (
            <div key={i} className="quote-card">
              <p className="quote-text">"{t.quote}"</p>
              <div className="quote-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
