import { useState, useRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import './Contact.css'

const FORMSPREE_URL = 'https://formspree.io/f/meeyqbwa'

export default function Contact() {
  const ref = useRef()
  useFadeIn(ref)

  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _replyto: form.email }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please email info@coliseumtalents.in directly.')
      }
    } catch {
      setError('Network error. Please email info@coliseumtalents.in directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="container contact-inner">
        <div className="contact-copy fade-up">
          <div className="gold-line" />
          <p className="eyebrow">Let's create something extraordinary</p>
          <h2>Book talent for your next event in India.</h2>
          <p>Tell us about your event and we'll respond with a tailored talent recommendation. Based in India, delivering pan-India.</p>
          <a href="mailto:info@coliseumtalents.in" className="contact-email">
            info@coliseumtalents.in
          </a>
          <a href="https://www.instagram.com/coliseum_talents" target="_blank" rel="noopener noreferrer" className="contact-social">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            @coliseum_talents
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
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="your@email.com"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Contact Number *</label>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone} onChange={handleChange} required
                  />
                </div>
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
              <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
                {loading ? 'Sending…' : 'Send Enquiry'}
              </button>
              {error && <p className="form-error">{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
