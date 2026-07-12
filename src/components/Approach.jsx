import { useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './Approach.css'

const STEPS = [
  { num: '01', title: 'Brief', desc: 'We align on audience, tone, goals and the atmosphere you want to create. No template, no assumptions — every brief is treated as its own world.' },
  { num: '02', title: 'Curate', desc: 'We shortlist premium talent that feels distinctive, relevant and fully aligned. You receive a considered selection, not a catalogue.' },
  { num: '03', title: 'Deliver', desc: 'We coordinate seamlessly so the experience feels effortless from start to finish. Every detail managed so you can focus on the moment.' },
]

export default function Approach() {
  const ref = useRef()
  useFadeIn(ref)

  return (
    <section className="section approach-section" id="approach" ref={ref}>
      <div className="container">
        <div className="approach-top fade-up">
          <div className="gold-line" />
          <p className="eyebrow">Our approach</p>
          <h2>A refined process from concept to curtain call.</h2>
        </div>

        <div className="steps">
          {STEPS.map((step, i) => (
            <article key={step.num} className={`step fade-up delay-${i + 1}`}>
              <div className="step-num">{step.num}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
