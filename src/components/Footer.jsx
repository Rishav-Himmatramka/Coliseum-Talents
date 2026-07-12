import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src="/logo.png" alt="Coliseum Talents" />
          <p>Boutique talent management &amp; consulting · India</p>
          <div className="footer-contact-links">
            <a href="mailto:info@coliseumtalents.in">info@coliseumtalents.in</a>
            <a href="https://www.instagram.com/coliseum_talents" target="_blank" rel="noopener noreferrer">@coliseum_talents</a>
          </div>
        </div>

        <nav className="footer-links">
          <a href="#about">About</a>
          <a href="#roster">Talent Roster</a>
          <a href="#expertise">Expertise</a>
          <a href="#events">Events</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </nav>

        <p className="footer-copy">© {year} Coliseum Talents. Founded by Anuj Agrawal. All rights reserved.</p>
      </div>
    </footer>
  )
}
