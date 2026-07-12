import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#roster', label: 'Talent Roster' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#events', label: 'Events' },
    { href: '#team', label: 'Team' },
  ]

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-logo">
          <img src="/logo.png" alt="Coliseum Talents" />
        </a>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
            Book Now
          </a>
        </nav>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
