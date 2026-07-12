import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt="Coliseum Talents" />
          <p>Crafted for extraordinary occasions.</p>
        </div>

        <nav className="footer-links">
          <a href="#about">About</a>
          <a href="#roster">Talent Roster</a>
          <a href="#expertise">Expertise</a>
          <a href="#events">Events</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer-copy">© {year} Coliseum Talents. All rights reserved.</p>
      </div>
    </footer>
  )
}
