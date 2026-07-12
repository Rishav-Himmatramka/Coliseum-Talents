import { useState, useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './Contact.css'

const EVENT_TYPES = ['', 'Corporate Event', 'Awards & Gala', 'Leadership Summit', 'Private Celebration', 'Brand Launch', 'Other']

export default function Contact() {
  const ref = useRef()
  useFadeIn(ref)

  const [form, setForm] = useState({ name: '', company: '', eventType: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Placeholder — replace with real form handler or API
    setSubmitted(true)
  }

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="container contact-inner">
        <div className="contact-copy fade-up">
          <div className="gold-line" />
          <p className="eyebrow">Let's create something extraordinary</p>
          <h2>Bring a remarkable talent experience to your next event.</h2>
          <p>Tell us about your event and we'll respond within one business day with a tailored recommendation.</p>
          <a href="mailto:hello@coliseumtalents.com" className="contact-email">
            hello@coliseumtalents.com
          </a>
        </div>

        <div className="contact-form-wrap fade-up delay-2">
          {submitted ? (
            <div className="form-success">
              <span className="success-icon">✦</span>
              <h3>Thank you — we'll be in touch.</h3>
              <p>We've received your enquiry and will respond within one business day.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Your name"
                    value={form.name} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company / Organisation *</label>
                  <input
                    id="company" name="company" type="text"
                    placeholder="Company name"
                    value={form.company} onChange={handleChange} required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="eventType">Event Type *</label>
                <select id="eventType" name="eventType" value={form.eventType} onChange={handleChange} required>
                  {EVENT_TYPES.map(t => (
                    <option key={t} value={t} disabled={!t}>{t || 'Select event type…'}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Tell us about your event *</label>
                <textarea
                  id="message" name="message"
                  placeholder="Event size, date, atmosphere, goals…"
                  rows={5}
                  value={form.message} onChange={handleChange} required
                />
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Send Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
